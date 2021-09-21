import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';
import image from 'svelte-image';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
    image({
      processFolders: ['images/people'],
    }) /* https://github.com/matyunya/svelte-image */,
    mdsvex(mdsvexConfig),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({
      // default options are shown
      pages: 'docs',
      assets: 'docs',
      fallback: null,
    }),
    vite: {
      resolve: {
        alias: {
          $comp: path.resolve('./src/lib/components'),
          $css: path.resolve('./src/lib/css'),
          $types: path.resolve('./src/lib/types'),
          $stores: path.resolve('./src/stores'),
          $static: path.resolve('./static'),
          $img: path.resolve('./static/images'),
        },
      },
    },
  },
};

export default config;
