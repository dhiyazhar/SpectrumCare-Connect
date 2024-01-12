/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	plugins: [require("daisyui"), require("flowbite/plugin")],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					'login-start': "#7FC8B6", 
					'login-end': "#A0B3E2",
					'ijo-kan': "#007C5E",
					'abu': '#D9D9D9',
					'abu-2': '#F1F1F1',
					'gradient-1-1': '#FF5353', 
					'gradient-1-2': '#EE41DD',
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
					950: "#172554",
				},
			},
		},
		fontFamily: {
			sans: ['Poppins', ],
		},
	},
	plugins: [],
};
