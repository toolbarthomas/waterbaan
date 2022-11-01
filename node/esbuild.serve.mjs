import esbuild from 'esbuild'

import { entryPoints, outfile, SassPlugin } from './esbuild.config.mjs'

/**
 * Starts the basic development server with Esbuild.
 */
;(async () => {
  await esbuild
    .serve(
      {
        host: 'localhost',
        port: 8000,
        servedir: 'dist'
      },
      {
        bundle: true,
        entryPoints,
        outfile,
        loader: { '.woff': 'copy', '.woff2': 'copy', '.svg': 'file' },
        plugins: [SassPlugin]
      }
    )
    .then((server) => {
      console.log(`Esbuild server started: http://${server.host}:${server.port}`)
    })
})()
