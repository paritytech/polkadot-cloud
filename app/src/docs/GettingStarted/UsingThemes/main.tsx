import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";

export const Doc = ({ folder }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Themes and CSS Variables"
        subtitle="Polkadot Cloud UI components use CSS Variables for custom theming."
        npm={undefined}
      />

      <h2>Introduction</h2>

      <p>More to come.</p>
    </>
  );
};
