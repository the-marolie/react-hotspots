import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactScopedCssPlugin } from "rollup-plugin-react-scoped-css";
import path from "path";
import { resolve } from 'node:path';
import packageJson from './package.json';
// https://vitejs.dev/config/

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'lib/index.js'),
      name: 'ReactHotspots',
      formats: ['es', 'umd'],
      fileName: (format) => `react-hotspots.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  plugins: [react(), reactScopedCssPlugin()]
});
