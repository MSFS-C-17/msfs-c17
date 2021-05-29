"use strict";

const fs = require("fs");
const path = require("path");

function* readdir(d) {
  for (const dirent of fs.readdirSync(d, { withFileTypes: true })) {
    if (["layout.json", "manifest.json"].includes(dirent.name)) {
      continue;
    }
    const resolved = path.join(d, dirent.name);
    if (dirent.isDirectory()) {
      yield* readdir(resolved);
    } else {
      yield resolved;
    }
  }
}

const MS_FILETIME_EPOCH = 116444736000000000n;
const C17 = path.resolve(__dirname, "..", "MSFS C-17");

const contentEntries = [];
let totalPackageSize = 0;

for (const filename of readdir(C17)) {
  const stat = fs.statSync(filename, { bigint: true });
  contentEntries.push({
    path: path.relative(C17, filename.replace(path.sep, "/")),
    size: Number(stat.size),
    date: Number(stat.mtimeNs / 100n + MS_FILETIME_EPOCH)
  });
  totalPackageSize += Number(stat.size);
}

fs.writeFileSync(
  path.join(C17, "layout.json"),
  JSON.stringify(
    {
      content: contentEntries
    },
    null,
    2
  )
);

fs.writeFileSync(
  path.join(C17, "manifest.json"),
  JSON.stringify(
    {
      ...require("../manifest-base.json"),
      package_version: require("../package.json").version,
      total_package_size: totalPackageSize.toString().padStart(20, "0")
    },
    null,
    2
  )
);
