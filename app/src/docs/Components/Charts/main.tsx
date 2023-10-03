import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { PieSimple } from "./PieSimple";
import { DonutPiePageDifferentStyles } from "./DonutPiePageDifferentStyles";
import { DonutPiePageDifferentSizes } from "./DonutPiePageDifferentSizes";
import { DonutPiePageDifferentSpeed } from "./DonutPiePageDifferentSpeed";

import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Charts"
        subtitle="Pure CSS Charts."
        npm={npm}
        status="stable"
      />
      <h3>Pie Chart - (Adjusting to wrapped component`s size)</h3>
      <PieSimple />
      <h3>Donut Pie Chart - Different styles</h3>
      <DonutPiePageDifferentStyles />
      <h3>Donut Pie Chart - Different sizes</h3>
      <DonutPiePageDifferentSizes />
      <h3>Donut Pie Chart - with different loading speeds</h3>
      <DonutPiePageDifferentSpeed />
    </>
  );
};
