const { mkdir, writeFile } = require("./actions");
const { join } = require("path");
const { prettyJSON, fromPackageJson } = require("./util");
const { updatePackages } = require("./_update-peer-deps");

const packageJsonTemplate = (name, version) => ({
  name,
  version,
  private: true,
  main: `src/index.js`,
  module: `src/index.js`,
  types: "src/index.d.ts",
  license: "MIT",
  scripts: {},
});

function indexTemplate(name) {
  return `export * from "./${name}";\nexport * from "./types";\n`;
}
const MODULE_TEMPLATE = "export {}\n";

const appRoot = join(__dirname, "..");
const packageJson = join(appRoot, "package.json");
const packageDir = join(appRoot, "packages");

async function createPackage() {
  const packageName = process.argv.slice(2)[0];
  if (!packageName) throw new Error("Invalid package name");
  const packageJsonContent = await fromPackageJson();
  const { kitPackages, version } = packageJsonContent;

  if (kitPackages.includes(packageName))
    throw new Error(`Package: "${packageName}" already exists`);

  const dir = join(packageDir, packageName);
  await mkdir(dir);

  const file = join(dir, "package.json");
  await writeFile(file, prettyJSON(packageJsonTemplate(packageName, version)));

  const src = join(dir, "src");
  await mkdir(src);

  const index = join(src, "index.ts");
  await writeFile(index, indexTemplate(packageName));

  const moduleCode = join(src, `${packageName}.ts`);
  await writeFile(moduleCode, MODULE_TEMPLATE);

  const typesFile = join(src, "types.ts");
  await writeFile(typesFile, MODULE_TEMPLATE);

  packageJsonContent.kitPackages.push(packageName);
  packageJsonContent.kitPackages.sort();

  await writeFile(packageJson, prettyJSON(packageJsonContent));
  await updatePackages();
}

if (require.main === module) {
  createPackage();
}
