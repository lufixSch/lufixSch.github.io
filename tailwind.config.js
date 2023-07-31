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
				}
			}
		}
	},
	plugins: []
};
