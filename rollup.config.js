import babel from "rollup-plugin-babel";
import buble from "rollup-plugin-buble";
import { uglify } from "rollup-plugin-uglify";
import resolve from '@rollup/plugin-node-resolve';

const config = {
  input: "index.js",
  output: {
    format: "cjs",
    interop: false,
    strict: false,
    exports: "named"
  },
  plugins: [
    buble({ objectAssign: true }),
    babel({
      babelrc: false,
      plugins: [
        resolve()
      ]
    })
  ],
  external: ["react", "prop-types"]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    babel({
      babelrc: false,
      plugins: [
        resolve()
      ]
    }),
    uglify({
      mangle: {
        properties: { regex: /^\$/ }
      },
      compress: {
        pure_getters: true
      }
    })
  );
}

export default config;
