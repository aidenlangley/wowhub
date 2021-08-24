import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
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
          $routes: path.resolve('./src/routes'),
          $news: path.resolve('./src/routes/news'),
          $docs: path.resolve('./src/routes/docs'),
        },
      },
      optimizeDeps: {
        include: ['svelte-hero-icons'],
      },
    },
  },
};

export default config;
