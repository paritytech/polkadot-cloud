import { exec } from "child_process";

const main = async () => {
  try {
    // Generate package.json and inject.
    exec(
      "node ../../.scripts/generatePackageJson.cjs -p core-ui -m index.tsx",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  } catch (e) {
    console.log(e);
  }
};

await main();
