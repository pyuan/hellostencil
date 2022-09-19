import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import babel from '@rollup/plugin-babel';

export const config: Config = {
  namespace: 'hellostencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
      babel({ 
        babelHelpers: 'bundled', 
        extensions: ['.ts', '.tsx'], 
        plugins: ['macros'],
      }),
    ]
  }
};
