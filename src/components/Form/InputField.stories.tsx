import InputField from "./InputField";
import { StoryObj } from "@storybook/react";
import { IInputFieldProps, TInputFieldFloatingType } from "./InputField.helper";

export default {
	component: InputField,
	storyName: "InputField",
	tags: ["autodocs"],
	args: {
		disabled: false,
		type: "text",
	},
	argTypes: {
		disabled: { control: "boolean" },
		type: { control: "object" },
	},
} as StoryObj;

export const InputFieldFilled = {
	args: {
		id: "filled-input",
		label: "Filled Input",
		type: "text",
		disabled: false,
		inputFieldType: "filled" as TInputFieldFloatingType,
	} as IInputFieldProps,
};

export const InputFieldOutlined = {
	args: {
		id: "outlined-input",
		label: "Outlined Input",
		type: "text",
		disabled: false,
		inputFieldType: "outlined" as TInputFieldFloatingType,
	} as IInputFieldProps,
};

export const InputFieldStandard = {
	args: {
		id: "standard-input",
		label: "Standard Input",
		type: "text",
		disabled: false,
		inputFieldType: "standard" as TInputFieldFloatingType,
	} as IInputFieldProps,
};
