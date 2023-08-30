/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { JSX, useEffect, useState } from "react";

import { Grid } from "../../base/structure/Grid";
import { Card } from "../../base/structure/Card";
import { GridJustify, GridSizes, GridItemsAlignment } from "../../base/types";
import { PolkadotIcon } from "../../icons/PolkadotIcon";
import { ellipsisFn, valEmpty } from "../../utils";
import { HPosition, HPositionLR } from "../../types";

import "@polkadot-cloud/core/css/recipes/AccountCard/index.css";

interface AccountCardProps {
  title: TitleProps;
  fontSize?:
    | "xx-small"
    | "x-small"
    | "small"
    | "medium"
    | "large"
    | "larger"
    | "x-large"
    | "xx-large";
  ellipsis?: EllipsisProps;
  icon?: IconProps;
  extraComponent?: ExtraComponentProps;
  noCard?: boolean;
}

export interface IconProps extends CommonParams {
  size?: number;
  noCopy?: boolean;
  position?: HPositionLR;
}

export interface ExtraComponentProps extends CommonParams {
  component?: JSX.Element;
  position?: HPositionLR;
}

export interface EllipsisProps {
  active?: boolean;
  amount?: number;
  position?: HPosition;
}

interface CommonParams {
  gridSize?: GridSizes;
  justify?: GridJustify;
}

export interface TitleProps {
  address: string;
  align?: GridItemsAlignment;
  justify?: GridJustify;
  component?: JSX.Element;
  name?: string;
}

export const AccountCard = ({
  title,
  fontSize,
  ellipsis = { active: false, amount: 7 },
  icon,
  extraComponent,
  noCard = false,
}: AccountCardProps) => {
  const fontClasses: string[] = [
    valEmpty(fontSize, "account-card-font-size-" + fontSize) ||
      "account-card-font-size-medium",
    valEmpty(ellipsis.active, "ellipsis"),
    " account-card-main-text",
  ];

  const structure = [];

  // state icSize (icon's Grid column gridSize)
  const [icSize, setIcSize] = useState<GridSizes | undefined>(icon?.gridSize);
  // state mainSize (main area's Grid column size)
  const [mainSize, setMainSize] = useState<GridSizes>(12);
  // state xtraSize (extra component's Grid column size)
  const [xtraSize, setXtraSize] = useState<GridSizes | undefined>(
    extraComponent?.gridSize
  );

  // Adjust the columns
  useEffect(() => {
    // default values for iSize (icon's column size), xSize (extra component's column size) and mSize (main area's column size)
    let iGridSize: GridSizes = 2;
    let xGridSize: GridSizes = 2;
    let mGridSize: GridSizes = 8;

    // Based on the existance of icon/extraComponent and if their sizes are given as params, the following 'if' is calculating the correct sizes
    // in the 12 column Grid that polakdot-cloud supports at the moment, and sets the states accordingly
    if (icon?.gridSize || extraComponent?.gridSize) {
      iGridSize = icon?.gridSize || 2;
      xGridSize = extraComponent?.gridSize || 2;
      mGridSize = (12 -
        ((icon ? iGridSize : 0) +
          (extraComponent ? xGridSize : 0))) as GridSizes;
    }
    setIcSize(iGridSize);
    setXtraSize(xGridSize);
    setMainSize(mGridSize);
  }, [icon, extraComponent]);

  const IconComponent = (
    <Grid key={`icon_${icSize}`} column sm={icSize} justify={icon?.justify}>
      <PolkadotIcon
        address={title.address}
        size={icon?.size || 30}
        nocopy={icon?.noCopy}
      />
    </Grid>
  );

  const MainTextComponent = (
    <Grid
      key={`main_${mainSize}`}
      column
      sm={mainSize}
      justify={title?.justify}
      alignItems={title?.align || "center"}
    >
      <div className={fontClasses?.filter((a) => a.trim() != "")?.join("")}>
        {title?.component ||
          (ellipsis?.active
            ? ellipsisFn(title?.name || title.address, ellipsis.amount)
            : title?.name || title.address)}
      </div>
    </Grid>
  );

  structure.push(MainTextComponent);

  if (icon) {
    if (icon?.position === "right") {
      structure.push(IconComponent);
    } else {
      structure.unshift(IconComponent);
    }
  }

  if (extraComponent) {
    if (extraComponent?.position === "right") {
      structure.push(
        <Grid
          column
          sm={xtraSize}
          justify={extraComponent?.justify}
          alignItems="center"
        >
          {extraComponent.component}
        </Grid>
      );
    } else {
      structure.unshift(
        <Grid
          key={`x_${xtraSize}`}
          column
          sm={xtraSize}
          justify={extraComponent?.justify}
          alignItems="center"
        >
          {extraComponent.component}
        </Grid>
      );
    }
  }

  return (
    <Grid row alignItems="center" key={`core_component`}>
      {noCard ? (
        structure
      ) : (
        <Card className="account-card-theme-border">{structure}</Card>
      )}
    </Grid>
  );
};
