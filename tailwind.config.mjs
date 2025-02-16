import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'], // O reemplaza 'Inter' por tu elección
		},
	  },
	},
	darkMode: 'class',
	plugins: [
		typography
	],
  };
  