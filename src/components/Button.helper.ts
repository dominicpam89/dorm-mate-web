import { TColorTheme } from "@/data/helper/color-theme.type";
import { TSize } from "@/data/helper/size.type";

/**
 * @definition
 * This is how Button is displayed
 * @type {full} with background color
 * @type {outlined} with border
 * @type {text} no border, no background, only text
 */
export type TDisplayType = "full" | "outlined" | "text";

export type TRoundedType = "sm" | "md" | "lg";

export interface PropsUIButton {
	text: string;
	size: TSize;
	color: TColorTheme;
	displayType: TDisplayType;
	rounded?: TRoundedType;
	disabled?: boolean;
}

/**
 * @function useStyleBase
 * @definition
 * This function defines:
 * - Transition for the component
 * - the rounded size based on tailwind
 * @param {TRoundedType} rounded - param to define how rounded the button component is
 * @returns {string} - tailwind style class system
 *
 * @typedef {{"sm" | "md" | "lg"}} TRoundedType - how rounded the button is
 */
export const useStyleBase = (rounded: TRoundedType) => {
	let twClass = `transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105 
		disabled:bg-gray-300 disabled:text-gray-800/50 disabled:hover:scale-100 disabled:hover:opacity-100`;
	switch (rounded) {
		default:
			twClass += " rounded-sm";
			break;
		case "md":
			twClass += " rounded-md";
			break;
		case "lg":
			twClass += " rounded-lg";
			break;
	}
	return twClass;
};

/**
 * @function useStyleSize
 * @description
 * This function takes a size parameter and returns the corresponding Tailwind CSS classes for the Button component.
 * @param {TSize} size - the size of button
 * @param {string} [size=sm] - The size of the button. Default is "sm".
 * @return {string} it is tailwind class based system
 *
 * @typedef {("xs" | "sm" | "md" | "lg" | "xl")} TSize - The size type for the button.
 * @property {string} xs - Extra small button.
 * @property {string} sm - Default button size.
 * @property {string} md - Medium size button.
 * @property {string} lg - Large size button.
 * @property {string} xl - Extra large size button.
 *
 */
export const useStyleSize = (size: TSize = "sm") => {
	let twClass: string = "px-3 py-2 text-sm";
	switch (size) {
		case "xs":
			twClass = "px-2 py-1 text-sm";
			break;
		case "md":
			twClass = "px-4 py-2 text-sm";
			break;
		case "lg":
			twClass = "px-5 py-3 text-base";
			break;
		case "xl":
			twClass = "px-6 py-4 text-lg";
			break;
		default: // already defined initially
			break;
	}
	return twClass;
};

const twClass = "scale-105";

/**
 * Returns a nested object containing Tailwind CSS classes based on display type and color theme.
 *
 * @function useStyleButton
 * @description This function generates and returns an object that maps display types and color themes to their respective Tailwind CSS classes.
 * @returns {TypeTwClasses} An object mapping display types and color themes to Tailwind CSS classes.
 *
 * @typedef {Object} TypeTwClasses - The type representing the structure of the Tailwind CSS classes object.
 * @property {Object} full - Full display type classes.
 * @property {string} full.primary - Primary color theme for full display type.
 * @property {string} full.secondary - Secondary color theme for full display type.
 * @property {string} full.warning - Warning color theme for full display type.
 * @property {string} full.error - Error color theme for full display type.
 * @property {string} full.info - Info color theme for full display type.
 * @property {string} full.success - Success color theme for full display type.
 * @property {Object} outlined - Outlined display type classes.
 * @property {string} outlined.primary - Primary color theme for outlined display type.
 * @property {string} outlined.secondary - Secondary color theme for outlined display type.
 * @property {string} outlined.warning - Warning color theme for outlined display type.
 * @property {string} outlined.error - Error color theme for outlined display type.
 * @property {string} outlined.info - Info color theme for outlined display type.
 * @property {string} outlined.success - Success color theme for outlined display type.
 * @property {Object} text - Text display type classes.
 * @property {string} text.primary - Primary color theme for text display type.
 * @property {string} text.secondary - Secondary color theme for text display type.
 * @property {string} text.warning - Warning color theme for text display type.
 * @property {string} text.error - Error color theme for text display type.
 * @property {string} text.info - Info color theme for text display type.
 * @property {string} text.success - Success color theme for text display type.
 *
 * @typedef {("full" | "outlined" | "text")} TDisplayType - The type representing the display type.
 * @typedef {("primary" | "secondary" | "warning" | "error" | "info" | "success")} TColorTheme - The type representing the color theme.
 */
export const useStyleButton = () => {
	type TypeTwClasses = {
		[key in TDisplayType]: {
			[key in TColorTheme]: string;
		};
	};
	const twClasses: TypeTwClasses = {
		full: {
			primary: "bg-primary-dark-color text-primary-dark-contrast",
			secondary: "bg-secondary-dark-color text-secondary-dark-contrast",
			warning: "bg-warning-dark-color text-warning-dark-contrast",
			error: "bg-error-dark-color text-error-dark-contrast",
			info: "bg-info-dark-color text-info-dark-contrast",
			success: "bg-success-dark-color text-success-dark-contrast",
		},
		outlined: {
			primary:
				"border border-1 border-primary-dark-color text-primary-dark-color",
			secondary:
				"border border-1 border-secondary-dark-color text-secondary-dark-color",
			warning:
				"border border-1 border-warning-dark-color text-warning-dark-color",
			error: "border border-1 border-error-dark-color text-error-dark-color",
			info: "border border-1 border-info-dark-color text-info-dark-color",
			success:
				"border border-1 border-success-dark-color text-success-dark-color",
		},
		text: {
			primary: "border-none text-primary-dark-color",
			secondary: "border-none text-secondary-dark-color",
			warning: "border-none text-warning-dark-color",
			error: "border-none text-error-dark-color",
			info: "border-none text-info-dark-color",
			success: "border-none text-success-dark-color",
		},
	};
	return twClasses;
};
