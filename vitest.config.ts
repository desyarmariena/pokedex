/// <reference types="vitest" />

import {defineConfig, mergeConfig} from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      environmentMatchGlobs: [
        ['**/*.test.tsx', 'jsdom'],
        ['**/*.component.test.tsx', 'jsdom'],
      ],
    },
  }),
)