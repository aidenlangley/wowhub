const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const imports = require('postcss-import');
const presetenv = require('postcss-preset-env');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
  plugins: [
    imports(),
    tailwindcss(),
    presetenv(),
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
};

module.exports = config;
