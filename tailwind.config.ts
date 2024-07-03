import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					main: {
						color: "rgba(var(--color-primary-main),<alpha-value>)",
						contrast:
							"rgba(var(--color-primary-main-contrast),<alpha-value>)",
					},
					dark: {
						color: "rgba(var(--color-primary-dark),<alpha-value>)",
						contrast:
							"rgba(var(--color-primary-dark-contrast),<alpha-value>)",
					},
					light: {
						color: "rgba(var(--color-primary-light),<alpha-value>)",
						contrast:
							"rgba(var(--color-primary-light-contrast),<alpha-value>)",
					},
				},
				secondary: {
					main: {
						color: "rgba(var(--color-secondary-main),<alpha-value>)",
						contrast:
							"rgba(var(--color-secondary-main-contrast),<alpha-value>)",
					},
					dark: {
						color: "rgba(var(--color-secondary-dark),<alpha-value>)",
						contrast:
							"rgba(var(--color-secondary-dark-contrast),<alpha-value>)",
					},
					light: {
						color: "rgba(var(--color-secondary-light),<alpha-value>)",
						contrast:
							"rgba(var(--color-secondary-light-contrast),<alpha-value>)",
					},
				},
				success: {
					main: {
						color: "rgba(var(--color-success-main),<alpha-value>)",
						contrast:
							"rgba(var(--color-success-main-contrast),<alpha-value>)",
					},
					dark: {
						color: "rgba(var(--color-success-dark),<alpha-value>)",
						contrast:
							"rgba(var(--color-success-dark-contrast),<alpha-value>)",
					},
					light: {
						color: "rgba(var(--color-success-light),<alpha-value>)",
						contrast:
							"rgba(var(--color-success-light-contrast),<alpha-value>)",
					},
				},
				warning: {
					main: {
						color: "rgba(var(--color-warning-main),<alpha-value>)",
						contrast:
							"rgba(var(--color-warning-main-contrast),<alpha-value>)",
					},
					dark: {
						color: "rgba(var(--color-warning-dark),<alpha-value>)",
						contrast:
							"rgba(var(--color-warning-dark-contrast),<alpha-value>)",
					},
					light: {
						color: "rgba(var(--color-warning-light),<alpha-value>)",
						contrast:
							"rgba(var(--color-warning-light-contrast),<alpha-value>)",
					},
				},
				error: {
					main: {
						color: "rgba(var(--color-error-main),<alpha-value>)",
						contrast:
							"rgba(var(--color-error-main-contrast),<alpha-value>)",
					},
					dark: {
						color: "rgba(var(--color-error-dark),<alpha-value>)",
						contrast:
							"rgba(var(--color-error-dark-contrast),<alpha-value>)",
					},
					light: {
						color: "rgba(var(--color-error-light),<alpha-value>)",
						contrast:
							"rgba(var(--color-error-light-contrast),<alpha-value>)",
					},
				},
				info: {
					main: {
						color: "rgba(var(--color-info-main),<alpha-value>)",
						contrast:
							"rgba(var(--color-info-main-contrast),<alpha-value>)",
					},
					dark: {
						color: "rgba(var(--color-info-dark),<alpha-value>)",
						contrast:
							"rgba(var(--color-info-dark-contrast),<alpha-value>)",
					},
					light: {
						color: "rgba(var(--color-info-light),<alpha-value>)",
						contrast:
							"rgba(var(--color-info-light-contrast),<alpha-value>)",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
