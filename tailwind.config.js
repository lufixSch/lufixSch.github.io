/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f1e7f8',
					100: '#e3d0f1',
					200: '#c8a0e3',
					300: '#ac71d5',
					400: '#9141c7',
					DEFAULT: '#7512b9',
					600: '#5e0e94',
					700: '#460b6f',
					800: '#2f074a',
					900: '#170425',
					dark: {
						50: '#f4eafa',
						100: '#e8d5f5',
						200: '#d1aceb',
						300: '#bb82e2',
						400: '#a459d8',
						DEFAULT: '#8d2fce',
						600: '#7126a5',
						700: '#551c7c',
						800: '#381352',
						900: '#1c0929'
					}
				},
				gray: {
					50: '#ebebec',
					100: '#d8d7d8',
					200: '#b0afb1',
					300: '#89878a',
					400: '#615f63',
					DEFAULT: '#3a373c',
					600: '#2e2c30',
					700: '#232124',
					800: '#171618',
					900: '#0c0b0c'
				},
				status: {
					finished: {
						DEFAULT: 'oklch(92.5% 0.084 155.995)',
						dark: 'oklch(39.3% 0.095 152.535)',
						text: {
							DEFAULT: 'oklch(44.8% 0.119 151.328)',
							dark: 'oklch(92.5% 0.084 155.995)'
						}
					},
					wip: {
						DEFAULT: 'oklch(88.2% 0.059 254.128)',
						dark: 'oklch(37.9% 0.146 265.522)',
						text: {
							DEFAULT: 'oklch(42.4% 0.199 265.638)',
							dark: 'oklch(88.2% 0.059 254.128)'
						}
					},
					stalled: {
						DEFAULT: 'oklch(94.5% 0.129 101.54)',
						dark: 'oklch(42.1% 0.095 57.708)',
						text: {
							DEFAULT: 'oklch(47.6% 0.114 61.907)',
							dark: 'oklch(94.5% 0.129 101.54)'
						}
					},
					abandoned: {
						DEFAULT: 'oklch(92.8% 0.006 264.531)',
						dark: 'oklch(37.3% 0.034 259.733)',
						text: {
							DEFAULT: 'oklch(27.8% 0.033 256.848)',
							dark: 'oklch(87.2% 0.01 258.338)'
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
