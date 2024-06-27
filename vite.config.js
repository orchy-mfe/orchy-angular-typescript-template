import { defineConfig } from 'vite'
import angular from '@analogjs/vite-plugin-angular'
import { visualizer } from 'rollup-plugin-visualizer'

const port = process.env.PORT ? parseInt(process.env.PORT) : 4200

export default defineConfig(({ mode }) => ({
  plugins: [
    angular({jit: true}),
    visualizer()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-angular-typescript-template/',
  server: { port, cors: true },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  resolve: {
    mainFields: ['module'],
  },
}));
