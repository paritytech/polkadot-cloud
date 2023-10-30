/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { JSX, useEffect, useState } from "react";

import { Grid } from "../../base/structure/Grid";
import { Card } from "../../base/structure/Card";
import { GridJustify, GridSizes, GridItemsAlignment } from "../../base/types";
import { valEmpty } from "../../utils";
import { ellipsisFn } from "@polkadot-cloud/utils";
import {
  HPositionLR,
  HPosition,
  ComponentBaseWithClassName,
} from "../../utils/types";

import "@polkadot-cloud/core/css/recipes/AccountCard/index.css";
import { Polkicon } from "../../icons/Polkicon";

type FontType =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "larger"
  | "x-large"
  | "xx-large";

interface AccountCardProps {
  title: TitleProps;
  fontSize?: FontType | string;
  ellipsis?: EllipsisProps;
  icon?: IconProps;
  extraComponent?: ExtraComponentProps;
  noCard?: boolean;
}

export interface IconProps extends CommonParams, ComponentBaseWithClassName {
  size?: number;
  copy?: boolean;
  position?: HPositionLR;
  colors?: string[];
  outerColor?: string;
  dark?: boolean;
}

export interface ExtraComponentProps
  extends CommonParams,
    ComponentBaseWithClassName {
  component?: JSX.Element;
  position?: HPositionLR;
}

export interface EllipsisProps {
  active?: boolean;
  amount?: number;
  position?: string;
}

interface CommonParams {
  gridSize?: GridSizes;
  justify?: GridJustify;
}

export interface TitleProps extends ComponentBaseWithClassName {
  address: string;
  align?: GridItemsAlignment;
  justify?: GridJustify;
  component?: JSX.Element;
  name?: string;
}

const isOfFontType = (input: string): input is FontType => {
  return [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "larger",
    "x-large",
    "xx-large",
  ].includes(input);
};

export const AccountCard = ({
  title,
  fontSize,
  ellipsis = { active: false, amount: 7 },
  icon,
  extraComponent,
  noCard = false,
  className,
  style,
}: AccountCardProps & ComponentBaseWithClassName) => {
  const fontClasses: string[] = [
    isOfFontType(fontSize)
      ? valEmpty(fontSize, "account-card-font-size-" + fontSize) ||
        "account-card-font-size-medium"
      : "",
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
    <Grid
      key={`icon_${icSize}`}
      column
      sm={icSize}
      justify={icon?.justify}
      style={Object.assign({}, { margin: "auto" }, icon?.style)}
      className={icon?.className}
    >
      <Polkicon
        address={title.address}
        size={icon?.size || 30}
        copy={icon?.copy}
        colors={icon?.colors}
        outerColor={icon?.outerColor}
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
      <div
        style={Object.assign(
          {},
          title?.style || {},
          !isOfFontType(fontSize) ? { fontSize } : {},
          // Auto-ellipsis when component becomes too small and ellipsis is not active
          !ellipsis?.active
            ? {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }
            : {}
        )}
        className={`${title?.className} ${fontClasses
          ?.filter((a) => a.trim() != "")
          ?.join("")}`}
      >
        {title?.component ||
          (ellipsis?.active
            ? ellipsisFn(
                title?.name || title.address,
                ellipsis.amount,
                (ellipsis?.position as HPosition) || "center"
              )
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
    const Comp = (
      <Grid
        key={`x_${xtraSize}`}
        column
        sm={xtraSize}
        justify={extraComponent?.justify}
        alignItems="center"
        className={extraComponent?.className}
        style={extraComponent?.style}
      >
        {extraComponent.component}
      </Grid>
    );

    if (extraComponent?.position === "right") {
      structure.push(Comp);
    } else {
      structure.unshift(Comp);
    }
  }

  return (
    <Grid row alignItems="center" key={`core_component`}>
      {noCard ? (
        structure
      ) : (
        <Card
          style={style}
          className={"account-card-theme-border " + className}
        >
          {structure}
        </Card>
      )}
    </Grid>
  );
};
