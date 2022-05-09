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
  darkMode: 'class' /* media follows OS, class follows normal conventions */,
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    screens: {
      ty: em(514),
      sm: em(640),
      md: em(768),
      lg: em(1024),
      xl: em(1280),
      wide: em(1600),
      xwide: em(1920)
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
      mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      display: ['"Permanent Marker"', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      fontSize: {
        /* Like to be able to incrementally bump font sizes */
        12: [rem(12), '.75rem'],
        14: [rem(14), '.875rem'],
        16: [rem(16), '1.5rem'],
        18: [rem(18), '1.5rem'],
        20: [rem(20), '1.75rem'],
        22: [rem(22), '1.75rem'],
        24: [rem(24), '1.75rem'],
        26: [rem(26), '1.75rem'],
        28: [rem(28), '2rem'],
        30: [rem(30), '2rem'],
        32: [rem(32), '2.25rem'],
        34: [rem(34), '2.25rem'],
        36: [rem(36), '2.5rem'],
        38: [rem(38), '2.5rem'],
        40: [rem(40), '2.5rem'],
        42: [rem(42), '2.5rem'],
        44: [rem(44), '2.5rem'],
        46: [rem(46), '2.5rem'],
        48: [rem(48), '1'],
        50: [rem(50), '1'],
        52: [rem(52), '1'],
        54: [rem(54), '1'],
        56: [rem(56), '1'],
        58: [rem(58), '1'],
        60: [rem(60), '1'],
        62: [rem(62), '1'],
        64: [rem(64), '1'],
        72: [rem(72), '1'],
        96: [rem(96), '1'],
        128: [rem(128), '1']
      },
      borderWidth: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px'
      },
      colors: {
        gray: colors.stone,
        orange: colors.orange
      },
      typography: (theme) => ({
        sm: {
          css: {
            blockquote: {
              backgroundColor: theme(
                'colors.gray.50',
                defaultTheme.colors.gray[50]
              ),
              borderLeftWidth: theme('borderWidth.2')
            }
          }
        },
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            letterSpacing: theme(
              'letterSpacing.tight',
              defaultTheme.letterSpacing.tight
            )
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.green.300'),
              '&:hover': {
                color: theme('colors.green.200')
              }
            },
            strong: {
              color: theme('colors.gray.100')
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700')
            },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.green.800')
            },
            h1: {
              color: theme('colors.gray.100')
            },
            h2: {
              color: theme('colors.gray.100')
            },
            h3: {
              color: theme('colors.gray.100')
            },
            h4: {
              color: theme('colors.gray.100')
            },
            'figure figcaption': {
              color: theme('colors.gray.200')
            },
            code: {
              color: theme('colors.gray.100')
            },
            'a code': {
              color: theme('colors.gray.100')
            },
            thead: {
              color: theme('colors.gray.200'),
              borderBottomColor: theme('colors.gray.800')
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  }
};

module.exports = config;
