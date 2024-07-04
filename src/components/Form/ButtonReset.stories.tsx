import FormButtonReset from "./ButtonReset";
import { StoryObj } from "@storybook/react";

export default {
	component: FormButtonReset,
	storyName: "FormButton-Reset",
	tags: ["autodocs"],
} as StoryObj;

export const Default = {
	args: {
		text: "BtnReset",
	},
};
