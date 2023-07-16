import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  console.log('buildOptions:', options)
  return {
    entry: ['src/index.ts'],
    sourcemap: false,
    splitting: false,
    format: ['cjs', 'esm', 'iife'],
    clean: true,
    bundle: true,
    dts: true,
  }
})
