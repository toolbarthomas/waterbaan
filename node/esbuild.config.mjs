export const entryPoints = ['./src/index.ts']

export const keepNames = true

export const outfile = 'dist/index.js'

/**
 * Sass Plugin that should be used to process the styles for the components
 * and DOM. The DOM components are returned as plain stylesheet; these styles
 * should be structured within src/styles.
 *
 * Other stylesheets are resolved as JSON so it can be included within the
 * custom element as UnsafeCSS.
 */
export const SassPlugin = {
  name: 'Sass',
  setup(build) {
    build.onLoad({ filter: /\.scss$/ }, async (args) => {
      const fs = await import('fs')
      const sass = await import('sass')
      const data = await fs.promises.readFile(args.path)
      const { css } = sass.default.compileString(data.toString(), {
        loadPaths: ['./src']
      })

      // Return the stylesheets within src/styles as default css since
      // we expect it to be added as global stylesheet.
      // Other stylesheets should be used within the build
      return args.path.indexOf('src/styles') > -1
        ? {
            contents: css,
            loader: 'css'
          }
        : {
            contents: [`import { css } from 'lit'`, `export const styles = css\`${css}\``].join(
              '\n'
            ),
            loader: 'js'
          }
    })
  }
}
