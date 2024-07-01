import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
        entry: path.resolve('src', 'components'),
        formats: ['es'],
        name: 'uilib',
        fileName: 'uiLib',
    }
}
})
