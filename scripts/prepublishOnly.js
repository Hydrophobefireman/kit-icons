const { join } = require("path");
const { rename } = require("./actions");
const { fromPackageJson } = require("./util");
const root = join(__dirname, "..");
const dist = join(root, "dist");
const packages = join(dist, "packages");
const { updatePackages } = require("./_update-peer-deps");

async function movePackage(name) {
  const src = join(packages, name);
  const dest = join(root, name);
  await rename(src, dest);
}

async function main() {
  await updatePackages();
  const { kitPackages } = await fromPackageJson();
  await Promise.all(kitPackages.map((x) => movePackage(x)));
}

if (require.main === module) {
  main();
}
