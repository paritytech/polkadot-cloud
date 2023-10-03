import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { TextfieldSimple } from "./TextfieldSimple";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Textfield"
        subtitle="Simple textfield component."
        npm={npm}
        status="experimental"
      />

      <h3>The Textfield</h3>

      <TextfieldSimple />
    </>
  );
};
