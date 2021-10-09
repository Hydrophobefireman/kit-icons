const { mkdir } = require("./actions");
const { join } = require("path");
const { postpublish, root } = require("./util");

async function main() {
  console.log(`Root: ${root}`);
  const core = join(root, "dist");
  await postpublish();
  await mkdir(core);
}

if (require.main === module) {
  main();
}
