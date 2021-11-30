// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import path from 'path';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  /**
   * Consult https://github.com/sveltejs/svelte-preprocess
   * for more information about preprocessors
   */
  preprocess: [
    preprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig)
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    /**
     * Opted for static adapter
     * https://kit.svelte.dev/docs#adapters
     */
    // adapter: adapter({
    //   pages: 'docs',
    //   assets: 'docs',
    //   fallback: null,
    // }),

    /**
     * https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify
     */
    adapter: adapter(),

    prerender: {
      enabled: true,
      crawl: true
    },

    vite: {
      resolve: {
        alias: {
          $comp: path.resolve('./src/lib/components'),
          $css: path.resolve('./src/lib/css'),
          $models: path.resolve('./src/lib/models'),
          $stores: path.resolve('./src/stores'),
          $img: path.resolve('./src/images')
        }
      }
    }
  }
};

export default config;
