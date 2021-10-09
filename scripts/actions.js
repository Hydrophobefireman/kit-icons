const fs = require("fs/promises");
const { relative } = require("path");

const { join } = require("path");
const root = join(__dirname, "..");
const dist = join(root, "dist");
function rRoot(path) {
  return relative(root, path);
}

/** @type {fs['writeFile']} */
const writeFile = async function writeFile(path, data) {
  console.log(`[fs] Writing to ${rRoot(path)}`);
  return await fs.writeFile(path, data);
};

/** @type {fs['readFile']} */
const readFile = async function readFile(path) {
  console.log(`[fs] Reading ${rRoot(path)}`);
  return await fs.readFile(path);
};

/** @type {fs['rm']} */
const rm = async function rm(path, options) {
  console.log(`$ rm -rf ${rRoot(path)}`);
  return await fs.rm(path, options);
};

/** @type {fs['mkdir']} */
const mkdir = async function mkdir(path, ...rest) {
  console.log(`$ mkdir ${rRoot(path)}`);
  return await fs.mkdir(path, ...rest);
};

/** @type {fs['readdir']} */
const readdir = async function readdir(path, ...rest) {
  console.log(`[fs] Reading ${rRoot(path)}/`);
  return await fs.readdir(path, ...rest);
};

/** @type {fs['rename']} */
const rename = async function rename(src, dest) {
  console.log(`$ mv ${rRoot(src)} ${rRoot(dest)}`);
  return await fs.rename(src, dest);
};

/**@type {fs['copyFile']} */
const copyFile = async function copyFile(src, dest, ...rest) {
  console.log(`$ cp ${rRoot(src)} ${rRoot(dest)}`);
  return await fs.copyFile(src, dest);
};
module.exports = {
  writeFile,
  dist,
  readFile,
  rm,
  mkdir,
  readdir,
  rename,
  rRoot,
  root,
  copyFile,
};
