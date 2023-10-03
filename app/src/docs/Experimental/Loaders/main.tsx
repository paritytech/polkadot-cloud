import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { LoaderCube } from "./LoaderCube";
import { LoaderLine } from "./LoaderLine";
import { LoaderDots } from "./LoaderDots";

import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Loaders"
        subtitle="Pure CSS animated loaders."
        npm={npm}
        status="experimental"
      />
      <h3>Line Loader</h3>
      <LoaderLine />
      <h3>Dots Loader</h3>
      <LoaderDots />
      <h3>Cube Loader</h3>
      <LoaderCube />
    </>
  );
};
