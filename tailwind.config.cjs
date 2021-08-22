const colors = require('tailwindcss/colors')

// Helper functions
const em = (px) => `${px / 16}em`
const rem = (px) => `${px / 16}rem`

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts,postcss}",
	],
	theme: {
		extend: {
			screens: {
				tyd: { max: em(513) },
				ty: em(514),

				smd: { max: em(639) },
				sm: em(640),

				mdd: { max: em(767) },
				md: em(768),

				lgd: { max: em(1023) },
				lg: em(1024),

				xld: { max: em(1279) },
				xl: em(1280),

				'2xl': { max: em(1536) },
				'2xld': em(1536),
			},
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
			fontFamily: {
				sans: ['Inter'],
				serif: ['"Roboto Slab"'],
				mono: ['"Fira Code"'],
				display: ['"Permanent Marker"']
			},
			borderWidth: {
				10: '10px',
				12: '12px',
				14: '14px',
				16: '16px'
			},
			colors: {
				orange: colors.orange
			}
		},
	},
	plugins: [],
	darkMode: 'class' /* media follows os, class follows normal rules */,
};

module.exports = config;
