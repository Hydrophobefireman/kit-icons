const { join } = require("path");
const { fromPackageJson } = require("./util");
const { copyFile } = require("./actions");
const root = join(__dirname, "..");
const dist = join(root, "dist");
const builtPackages = join(dist, "packages");
const srcPackages = join(root, "packages");

async function postbuild() {
  const { kitPackages } = await fromPackageJson();
  return await Promise.all(
    kitPackages.map(async (x) => {
      const sourceDir = join(srcPackages, x);
      const outDir = join(builtPackages, x);
      const packageJson = join(sourceDir, "package.json");
      return await copyFile(packageJson, join(outDir, "package.json"));
    })
  );
}

if (require.main) {
  postbuild();
}
