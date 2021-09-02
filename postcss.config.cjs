const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
  plugins: [
    require('postcss-import')({ plugins: [require('stylelint')] }),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
    !dev &&
      require('cssnano')({
        preset: 'default',
      }),
  ],
}

module.exports = config
