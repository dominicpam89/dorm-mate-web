import FloatingFilled from "./InputField/FloatingFilled";
import FloatingOutline from "./InputField/FloatingOutline";
import { IInputFieldProps } from "./InputField.type";
import FloatingStandard from "./InputField/FloatingStandard";

export default function InputField({
	inputFieldType,
	componentProps,
}: IInputFieldProps) {
	switch (inputFieldType) {
		case "filled":
			return <FloatingFilled {...componentProps} />;
		case "outlined":
			return <FloatingOutline {...componentProps} />;
		case "standard":
			return <FloatingStandard {...componentProps} />;
		default:
			throw new Error("no component selected");
	}
}
