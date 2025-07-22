import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf_character_detail',
      filename: 'remoteEntry.js',
      exposes: {
        './CharacterDetail': './src/CharacterDetail.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5174,
    strictPort: true,
    host: 'localhost',
    cors: true,
  },
})
