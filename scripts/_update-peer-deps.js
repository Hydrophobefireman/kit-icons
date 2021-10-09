const {
  packageDir,
  prettyJSON,
  fromPackageJson,
  packageJsonLoc,
} = require("./util");
const { readFile, writeFile } = require("./actions");
const { join } = require("path");

async function updatePackages() {
  const packageJson = await fromPackageJson();
  const { kitPackages, version, peerDependencies, kitBase } = packageJson;

  await Promise.all(
    kitPackages.map(async (x) => {
      const folder = join(packageDir, x);
      const subPackageJson = join(folder, "package.json");
      const js = JSON.parse((await readFile(subPackageJson)).toString());
      js.version = version;
      js.peerDependencies = Object.assign({}, peerDependencies);
      await writeFile(subPackageJson, prettyJSON(js));
    })
  );
  const exportsField = Object.assign({}, kitBase.exports);
  kitPackages.forEach((packageName) => {
    exportsField[`./${packageName}`] = `./${packageName}/src/index.js`;
  });
  packageJson.exports = exportsField;
  await writeFile(packageJsonLoc, prettyJSON(packageJson));
}
module.exports.updatePackages = updatePackages;

if (require.main === module) {
  updatePackages();
}
