import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Points to your main entry point
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VueCurrencyFormatterLite',
      // Explicitly define both formats for package.json compatibility
      formats: ['es', 'umd'],
      fileName: (format) => `vue-currency-formatter-lite.${format}.js`,
    },
    rollupOptions: {
      // Prevents Vue from being bundled into your library
      external: ['vue'],
      output: {
        // Essential for UMD builds to recognize Vue globally
        globals: {
          vue: 'Vue',
        },
        // Helps with tree-shaking and avoids "default export" issues
        exports: 'named',
      },
    },
    // Using Terser for that <1KB target
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs from production build
        pure_funcs: ['console.info', 'console.debug'],
      },
    },
    sourcemap: true, // Keep this for easier debugging for your users
    emptyOutDir: true, // Clears the dist folder before every build
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});