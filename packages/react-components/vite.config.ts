import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  root: './example',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@css': '/styled-system',
    },
  },
})