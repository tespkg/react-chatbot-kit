import * as path from 'path'

import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'

/** * @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    alias({
      entries: {
        'react-conditionally-render': path.resolve(new URL(import.meta.url).pathname, '../3rd-party/react-conditionally-render/index.ts'),
      }
    }),
  ],
  external: ['react'],
  output: {
    file: 'build/index.js',
    format: 'esm'
  },
}

export default config
