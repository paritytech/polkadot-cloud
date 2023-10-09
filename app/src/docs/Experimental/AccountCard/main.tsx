/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */ import { Header } from "@docs/Header";

import { Edit } from "@docs/Edit";

import { AccountCardPageInfo } from "./AccountCardPageInfo";
import { AccountCardPageSimple } from "./AccountCardPageSimple";
import { AccountCardPageSimpleNoIcon } from "./AccountCardPageSimpleNoIcon";
import { AccountCardPageSimpleMoreProps } from "./AccountCardPageSimpleMoreProps";
import { AccountCardPageAdvanced } from "./AccountCardPageAdvanced";
import { AccountCardPageAdvancedEllipsis } from "./AccountCardPageAdvancedEllipsis";
import { AccountCardPageAdvancedEllipsisExtreme } from "./AccountCardPageAdvancedEllipsisExtreme";
import { AccountCardPageAdvancedExtraComponent } from "./AccountCardPageAdvancedExtraComponent";
import { AccountCardPageAdvancedExtraComponentDiff } from "./AccountCardPageAdvancedExtraComponentDiff";
import { AccountCardPageAdvancedVariousIconChanges } from "./AccountCardPageAdvancedVariousIconChanges";
import { AccountCardPageStakingSamples } from "./AccountCardPageStakingSamples";

import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Account Card"
        subtitle="A card showing the account information with different areas for icon or a custom component."
        npm={npm}
        status="experimental"
      />
      <h4>Introduction</h4>
      <p>
        The <code>AccountCard</code> recipe is meant to exist for quick and fast
        showing of account data (address, name, icon etc); It is excellent for
        lists of accounts to be shown. Below can be found the different
        properties that the <code>AccountCard</code> component receives as
        props, in order to depict the needed example. The{" "}
        <code>AccountCard</code> with all possible props look like the following
        piece of code:
      </p>
      <AccountCardPageInfo />
      <h3>Simple Examples With or Without Icon</h3>
      <p>
        <code>iconProps</code> can be either fully filled or an empty object{" "}
        <code>{"{}"}</code>, that will make all params default (see above); In
        both cases a <code>Polkicon</code> will appear.
      </p>
      <AccountCardPageSimple />
      <p>
        If <code>iconProps</code> is not provided no icon will appear;{" "}
        <code>Title</code> with <code>address</code> props are the minimum that
        need to be provided.
      </p>
      <AccountCardPageSimpleNoIcon />
      <p>
        Other <code>iconProps</code> can be either the <code>girdSize</code>{" "}
        (Recipe will automatically calculate the rest of the size of the main
        area <code>MainAreaGridSize = 12 - IconGridSize</code>). In this example
        Icon is copy-able by passing the prop <code>copy</code> at the icon
        props.
      </p>
      <AccountCardPageSimpleMoreProps />
      <h3>Advanced Examples With Extra Params and Component</h3>
      <p>
        Amount of ellipsis can be set. When position, is <code>center</code>,
        then that amount corresponds to the <code>start</code> and to the{" "}
        <code>end</code> part of the text; If it is set to <code>start</code> or{" "}
        <code>end</code>, then it corresponds to the other side accordingly.
        (Defaults to <code>start</code>).
      </p>
      <AccountCardPageAdvanced />
      <h3>
        When the amount of ellipsis is too small, the ellipsis will default to
        4.
      </h3>
      <AccountCardPageAdvancedEllipsis />
      <p>
        If an extreme ellipsis amount is provided, then the Recipe will reduce
        it, in order to show the maximum possible amount (calculating with:
        (address.length/2) - 3 for <code>center</code>. For rest options is
        address.length - 3).
      </p>
      <AccountCardPageAdvancedEllipsisExtreme />
      <p>
        Extra component can be added; its default position is left. If icon
        position is also left, then the extra component always goes on the
        further side (same for right). Position, defaults to <code>left</code>;
        (recipe will automatically calculate the rest of the size of the main
        area based on:{" "}
        <code>
          MainAreaGridSize = 12 - IconGridSize - ExtraComponentGridSize
        </code>
        ).
      </p>
      <AccountCardPageAdvancedExtraComponent />
      <p>
        Extra component can be added; Its default position is left; If icon
        position is also left, then the extra component always goes on the
        further side (same for right); Position, defaults to <code>left</code>;
        (Recipe will automatically calculate the rest of the size of the main
        area based on:{" "}
        <code>
          MainAreaGridSize = 12 - IconGridSize - ExtraComponentGridSize
        </code>
        ).
      </p>
      <AccountCardPageAdvancedExtraComponentDiff />
      <AccountCardPageAdvancedVariousIconChanges />
      <h3>Sample that fits to Polkadot Staking Dashboard</h3>
      <p>Code below is used in both of the following examples.</p>
      <AccountCardPageStakingSamples />
    </>
  );
};
