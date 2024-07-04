import InputField from "./InputField";
import { StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import {
	IInputFieldProps,
	IInputFieldComponentProps,
	TInputFieldFloatingType,
} from "./InputField.type";

export default {
	component: InputField,
	storyName: "InputField",
	tags: ["autodocs"],
	args: {
		disabled: false,
	},
	argTypes: {
		disabled: { control: "boolean" },
	},
} as StoryObj;

export const FloatingFilled = {
	args: {
		inputFieldType: "filled" as TInputFieldFloatingType,
		componentProps: {
			id: "test-floating-filled",
			label: "Floating Filled",
			disabled: false,
		} as IInputFieldComponentProps,
	} as IInputFieldProps,
};

export const FloatingOutline = {
	args: {
		inputFieldType: "outlined" as TInputFieldFloatingType,
		componentProps: {
			id: "test-outlined-filled",
			label: "Outlined Filled",
			disabled: false,
		} as IInputFieldComponentProps,
	} as IInputFieldProps,
};

export const FloatingStandard = {
	args: {
		inputFieldType: "standard" as TInputFieldFloatingType,
		componentProps: {
			id: "test-standard-filled",
			label: "Standard Filled",
			disabled: false,
		} as IInputFieldComponentProps,
	} as IInputFieldProps,
};
