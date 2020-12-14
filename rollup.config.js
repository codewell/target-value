import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const outputFile = "./lib/index.js";
const extensions = [".js"];

export default {
  input: "./src/index.js",
  output: {
    file: outputFile,
    format: "cjs",
    exports: "auto",
  },
  external: [/@babel\/runtime/],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      extensions,
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
