import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { ActionItemStatic } from "./ActionItem";
import { ActionItemWithToggle } from "./ActionItemWithToggle";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Modal Components"
        subtitle="UI components for modal overlays."
        npm={npm}
        status="experimental"
      />
      <h3>Action Item</h3>
      <ActionItemStatic />
      <h3>Action Item with Toggle</h3>
      <ActionItemWithToggle />
    </>
  );
};
