import { existsSync, writeFileSync, unlinkSync } from "fs";
import esbuild from "esbuild";

import {
  entryPoints,
  keepNames,
  outfile,
  SassPlugin,
} from "./esbuild.config.mjs";

/**
 * Creates a new production bundle with
 */
(async () => {
  const result = await esbuild.build({
    bundle: true,
    entryPoints,
    keepNames,
    loader: { ".woff": "copy", ".woff2": "copy", ".svg": "file" },
    metafile: true,
    minify: true,
    outfile,
    plugins: [SassPlugin],
  });

  console.info(`Esbuild Bundle created: ${outfile}`);

  const meta = await esbuild.analyzeMetafile(result.metafile, {
    verbose: true,
  });

  if (meta) {
    const path = "./esbuild-meta";

    if (existsSync(path)) {
      unlinkSync(path);
    }

    writeFileSync(path, meta);

    console.info(`Bundle information available from: ${path}`);
  }
})();
