import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'

export default defineConfig([
  {
    input: 'src/index.ts',
    plugins: [dts({ compilerOptions: { module: 'ESNext' } })],
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
    },
  },
  {
    input: 'src/index.ts',
    plugins: [dts({ compilerOptions: { module: 'CommonJS' } })],
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
    },
  },
])
