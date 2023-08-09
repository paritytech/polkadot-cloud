import { generateLibIndex } from "./index.mjs";

const main = async () => {
  await generateLibIndex(["styles", "svg", "utils"], ["./styles/index.scss"]);
};

await main();
