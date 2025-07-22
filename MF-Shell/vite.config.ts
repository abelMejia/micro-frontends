import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default ({ mode }: { mode: any }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'mf_shell',
        remotes: {
          mf_characters: env.VITE_CHARACTER_LIST_URL,
          mf_character_detail: env.VITE_CHARACTER_DETAIL_URL,
        },
        shared: {
          react: { shareScope: 'default', requiredVersion: '^18.2.0' },
          'react-dom': { shareScope: 'default', requiredVersion: '^18.2.0' },
          'react-router-dom': { shareScope: 'default', requiredVersion: '^6.22.3' },
        },
      }),
    ],
    server: {
      port: 3000,
      strictPort: true,
      host: 'localhost',
      cors: true
    },
    build: {
      target: 'esnext',
      modulePreload: false,
      cssCodeSplit: false,
    },
  })
}
