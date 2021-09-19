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
    mdsvex(mdsvexConfig),
    image(),
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
          $components: path.resolve('./src/lib/components'),
          $layout: path.resolve('./src/lib/layout'),
          $media: path.resolve('./src/lib/media'),
          $store: path.resolve('./src/lib/store'),
          $images: path.resolve('./static/images'),
        },
      },
      optimizeDeps: {
        include: ['svelte-hero-icons'],
      },
    },
  },
};

export default config;
