type TInputFieldFloatingType = "filled" | "outlined" | "standard";

export interface IInputFieldComponentProps {
	id: string;
	label: string;
}

export interface IInputFieldProps {
	componentProps: IInputFieldComponentProps;
	inputFieldType: TInputFieldFloatingType;
}
