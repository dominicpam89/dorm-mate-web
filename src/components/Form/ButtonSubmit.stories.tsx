import FormButtonSubmit from "./ButtonSubmit";
import { StoryObj } from "@storybook/react";

export default {
	component: FormButtonSubmit,
	storyName: "FormButton-Submit",
	tags: ["autodocs"],
} as StoryObj;

export const Default = {
	args: {
		text: "BtnSubmit",
	},
};
