import typescript from "rollup-plugin-typescript2"
import pkg from "./package.json"

export default [
  {
    input: "src/index.tsx",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require("typescript")
      })
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'umd',
        name: 'index',
        sourcemap: 'inline',
      },
    ],
  }
]