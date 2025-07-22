import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf_characters',
      filename: 'remoteEntry.js',
      exposes: {
        './CharacterList': './src/CharacterList.tsx',
      },
      shared: {
        'react': { shareScope: 'default', requiredVersion: '^18.2.0' },
        'react-dom': { shareScope: 'default', requiredVersion: '^18.2.0' },
        'react-router-dom': { shareScope: 'default', requiredVersion: '^6.22.3' },
      },
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
  },
  server: {
    port: 4174,
    host: '0.0.0.0',
    cors: true,
  },
})
