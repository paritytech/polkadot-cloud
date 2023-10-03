import { Edit } from "../lib/Edit";
import { Header } from "../lib/Header";
import { TextfieldSimple } from "./TextfieldSimple";
import { DocProps } from "../lib/types";

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
