import { Header } from "../lib/Header";
import { Edit } from "../lib/Edit";

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

import { DocProps } from "../lib/types";

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
        The `AccountCard` recipe is meant to exist for quick and fast showing of
        account data (address, name, icon etc); It is excellent for lists of
        accounts to be shown. Below can be found the different properties that
        the `AccountCard` component receives as props, in order to depict the
        needed example. The `AccountCard` with all possible props look like the
        following piece of code:
      </p>
      <AccountCardPageInfo />
      <h3>Simple Examples With or Without Icon</h3>
      <p>
        `iconProps` can be either fully filled or an empty object `{}`, that
        will make all params default (see above); In both cases a `Polkicon`
        will appear.
      </p>
      <AccountCardPageSimple />
      <p>
        If `iconProps` is not provided no icon will appear; `Title` with
        `address` props are the minimum that need to be provided.
      </p>
      <AccountCardPageSimpleNoIcon />
      <p>
        Other `iconProps` can be either the `girdSize` (Recipe will
        automatically calculate the rest of the size of the main area
        `MainAreaGridSize = 12 - IconGridSize`). In this example Icon is
        copy-able by passing the prop `copy` at the icon props.
      </p>
      <AccountCardPageSimpleMoreProps />
      <h3>Advanced Examples With Extra Params and Component</h3>
      <p>
        Amount of ellipsis can be set. When position, is `center`, then that
        amount corresponds to the `start` and to the `end` part of the text; If
        it is set to `start` or `end`, then it corresponds to the other side
        accordingly. (Defaults to `start`).
      </p>
      <AccountCardPageAdvanced />
      <h3>
        When the amount of ellipsis is too small, the ellipsis will default to
        4.
      </h3>
      <AccountCardPageAdvancedEllipsis />
      <h3>
        If an extreme ellipsis amount is provided, then the Recipe will reduce
        it, in order to show the maximum possible amount (calculating with:
        (address.length/2) - 3 for `center`. For rest options is address.length
        - 3).
      </h3>
      <AccountCardPageAdvancedEllipsisExtreme />
      <p>
        Extra component can be added; its default position is left. If icon
        position is also left, then the extra component always goes on the
        further side (same for right). Position, defaults to `left`; (recipe
        will automatically calculate the rest of the size of the main area based
        on: `MainAreaGridSize = 12 - IconGridSize - ExtraComponentGridSize`).
      </p>
      <AccountCardPageAdvancedExtraComponent />
      <p>
        Extra component can be added; Its default position is left; If icon
        position is also left, then the extra component always goes on the
        further side (same for right); Position, defaults to `left`; (Recipe
        will automatically calculate the rest of the size of the main area based
        on: `MainAreaGridSize = 12 - IconGridSize - ExtraComponentGridSize`).
      </p>
      <AccountCardPageAdvancedExtraComponentDiff />
      <AccountCardPageAdvancedVariousIconChanges />
      <h3>Sample that fits to Polkadot Staking Dashboard</h3>
      <p>Code below is used in both of the following examples.</p>
      <AccountCardPageStakingSamples />
    </>
  );
};
