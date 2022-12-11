/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ["'Adventuro'", "sans-serif"],
				subtitle: ["'Alexandria'", "sans-serif"],
				inter: ["'Inter'", "sans-serif"],
			},
			colors: {
				orange: "#FF6D00",
				violet: "#3C096C",
				"violet-light": "#5A189A",
				"orange-light": "#FF8500",
			}
		},
	},
	plugins: [require('tailwind-clip-path'), require('@tailwindcss/typography'),],
}
