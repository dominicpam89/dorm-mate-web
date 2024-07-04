import { TSize } from "@/data/helper/size.type";
import UIButton from "./Button";
import { StoryObj } from "@storybook/react";
import { TColorTheme } from "@/data/helper/color-theme.type";
import { TDisplayType, TRoundedType } from "./Button.helper";

export default {
	component: UIButton,
	title: "UIButton",
	args: {
		text: "UI Button",
		size: "sm" as TSize,
		color: "primary" as TColorTheme,
		displayType: "full" as TDisplayType,
		rounded: "sm" as TRoundedType,
		disabled: false,
	},
	argTypes: {
		text: { control: "text" },
		size: {
			control: { type: "select" },
			options: ["xs", "sm", "md", "lg", "xl"] as TSize[],
		},
		color: {
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"info",
				"error",
				"warning",
				"success",
			] as TColorTheme[],
		},
		displayType: {
			control: { type: "select" },
			options: ["full", "outlined", "text"] as TDisplayType[],
		},
		rounded: {
			control: { type: "select" },
			options: ["sm", "md", "lg"] as TRoundedType[],
		},
		disabled: { control: "boolean" },
	},
} as StoryObj;

export const UIButtonDefault = {
	args: {
		text: "UI Button",
		size: "sm" as TSize,
		color: "primary" as TColorTheme,
		displayType: "full" as TDisplayType,
		rounded: "sm" as TRoundedType,
		disabled: false,
	},
};
