export type TInputFieldFloatingType = "filled" | "outlined" | "standard";

export interface IInputFieldComponentProps {
	id: string;
	label: string;
	disabled: boolean;
}

export interface IInputFieldProps {
	componentProps: IInputFieldComponentProps;
	inputFieldType: TInputFieldFloatingType;
}
