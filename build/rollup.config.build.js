import styles from 'rollup-plugin-styles'
import cssNext from 'postcss-preset-env'
import typescript from 'rollup-plugin-typescript2'
import ttypescript from 'ttypescript'

export default {
  input: 'src/rollup-plugin-styles-test.ts',
  output: {
    file: 'dist/rollup-plugin-styles-test.mjs'
  },
  plugins: [
    styles({
      autoModules: id => id.endsWith(".css"),
      plugins: [cssNext]
    }),
    typescript({
      typescript: ttypescript
    })
  ]
}
