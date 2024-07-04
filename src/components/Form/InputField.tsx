import { IInputFieldProps, useStyle } from "./InputField.helper";

export default function InputField({
	id,
	label,
	type,
	disabled,
	inputFieldType,
}: IInputFieldProps) {
	const style = useStyle();
	const inputStyle = style.input[inputFieldType];
	const labelStyle = style.label[inputFieldType];
	return (
		<div className="relative">
			<input
				type={type}
				id={id}
				className={inputStyle}
				placeholder=" "
				disabled={disabled}
			/>
			<label htmlFor={id} className={labelStyle}>
				{label}
			</label>
		</div>
	);
}
