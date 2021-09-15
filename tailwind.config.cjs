const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// Helper functions
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const em = (px) => `${round(px / 16)}em`;
const rem = (px) => `${round(px / 16)}rem`;

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,css,js,ts,svelte,postcss,svx}'],
  theme: {
    screens: {
      ty: em(514),
      sm: em(640),
      md: em(768),
      lg: em(1024),
      xl: em(1280),
      wide: em(1920),
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
      mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      display: ['"Permanent Marker"', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      fontSize: {
        ty: [rem(12), '.75rem'],
        12: [rem(12), '.75rem'], // ty

        sm: [rem(14), '.875rem'],
        14: [rem(14), '.875rem'], // sm

        'text-base': [rem(16), '1.5rem'], // base
        18: [rem(18), '1.5rem'],

        lg: [rem(20), '1.75rem'],
        20: [rem(20), '1.75rem'], // lg
        22: [rem(22), '1.75rem'],

        xl: [rem(24), '1.75rem'],
        24: [rem(24), '1.75rem'], // xl
        26: [rem(26), '1.75rem'],

        '2xl': [rem(28), '2rem'],
        28: [rem(28), '2rem'], // 2xl
        30: [rem(30), '2rem'],

        '3xl': [rem(32), '2.25rem'],
        32: [rem(32), '2.25rem'], // 3xl
        34: [rem(34), '2.25rem'],

        '4xl': [rem(36), '2.5rem'],
        36: [rem(36), '2.5rem'], // 4xl 2.25rem
        38: [rem(38), '2.5rem'],
        40: [rem(40), '2.5rem'],
        42: [rem(42), '2.5rem'],
        44: [rem(44), '2.5rem'],

        '5xl': [rem(48), '1'],
        48: [rem(48), '1'], // 5xl 3rem
        56: [rem(56), '1'],

        '6xl': [rem(60), '1'],
        60: [rem(60), '1'], // 6xl 3.75 rem
        62: [rem(62), '1'],
        64: [rem(64), '1'],

        '7xl': [rem(72), '1'],
        72: [rem(72), '1'], // 7xl 4.5 rem

        '8xl': [rem(96), '1'],
        96: [rem(96), '1'], // 8xl 6 rem

        '9xl': [rem(128), '1'],
        128: [rem(128), '1'], // 9xl 8 rem
      },
      borderWidth: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
      },
      colors: {
        gray: colors.warmGray,
        orange: colors.orange,
      },
      typography: (theme) => ({
        sm: {
          css: {
            blockquote: {
              backgroundColor: theme(
                'colors.gray.50',
                defaultTheme.colors.gray[50]
              ),
              borderLeftWidth: theme('borderWidth.2'),
            },
          },
        },
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            letterSpacing: theme(
              'letterSpacing.tight',
              defaultTheme.letterSpacing.tight
            ),
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.green.300'),
              '&:hover': {
                color: theme('colors.green.200'),
              },
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.green.800'),
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            'figure figcaption': {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.100'),
            },
            'a code': {
              color: theme('colors.gray.100'),
            },
            thead: {
              color: theme('colors.gray.200'),
              borderBottomColor: theme('colors.gray.800'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  darkMode: 'class' /* media follows OS, class follows normal conventions */,
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
};

module.exports = config;
