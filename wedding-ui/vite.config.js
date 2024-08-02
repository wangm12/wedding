import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/wedding",
  define: {
    'process.env.PUBLIC_URL': JSON.stringify("/wedding"),
  },
})
