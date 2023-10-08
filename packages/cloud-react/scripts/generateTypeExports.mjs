import fs, { existsSync } from "fs";
import path from "path";

export const generateTypeExports = (folderPath, outputFilePath) => {
  // Ensure folder exists folders.
  if (!existsSync(`./lib/types`)) fs.mkdirSync("./lib/types");

  let exportedTypes = [];

  const processFile = (filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    const lines = data.split("\n");
    for (const line of lines) {
      if (
        line.startsWith("export interface") ||
        line.startsWith("export type")
      ) {
        const matches = line.match(/export (interface|type) (\w+)/);
        if (matches && matches[2]) {
          const relativePath = path
            .relative(folderPath, filePath)
            .replace(/\\/g, "/")
            .replace(".ts", "");
          exportedTypes.push(
            `export { ${matches[2]} } from "../${relativePath}";`
          );
        }
      }
    }
  };

  const processFolder = (folder) => {
    const items = fs.readdirSync(folder);
    for (const item of items) {
      const itemPath = path.join(folder, item);
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory()) {
        processFolder(itemPath);
      } else if (stats.isFile() && itemPath.endsWith("types.ts")) {
        processFile(itemPath);
      }
    }
  };

  // Start processing from the root folder
  processFolder(folderPath);

  // Write the collected exports to the output file
  fs.writeFileSync(outputFilePath, exportedTypes.join("\n"), {
    parser: "typescript",
  });
};
