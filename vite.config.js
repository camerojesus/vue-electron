import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getSrcPath } from './pathUtils';

export default defineConfig({
  plugins: [vue()],
  base: './',
    optimizeDeps: {
      exclude: ['electron']
    },
  build: {
    // Configuración específica para el build de Electron
    rollupOptions: {
      // Asegura que Vite no empaquete módulos que no deberían estar en el bundle del navegador.
      external: ['electron'],
      output: {
        // Configura esto según las necesidades de tu proyecto
      },
    },

  },
  resolve: {
    alias: {
      '@': getSrcPath(),
    },
  },
})
