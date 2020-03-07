import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'components/index.js',
	output: {
		file: 'public/le.js',
		format: 'umd', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true,
		globals: "window",
		name: "lucky"
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};