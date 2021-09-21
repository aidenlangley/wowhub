import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';
// import image from 'svelte-image';
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
    /*
    https://github.com/matyunya/svelte-image
    Not really used atm, requires images in /static, not what I want
    */
    // image({
    //   sizes: [400, 800, 1200],
    //   breakpoints: [375, 768, 1024],
    // }),
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
          $img: path.resolve('./src/images'),
          $static: path.resolve('./static'),
        },
      },
    },
  },
};

export default config;
