const imports = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = {
  plugins: [
    imports,
    tailwindcss,
    autoprefixer,
    process.env.NODE_ENV !== 'development' &&
      cssnano({
        preset: 'default',
      }),
  ],
};

module.exports = config;
