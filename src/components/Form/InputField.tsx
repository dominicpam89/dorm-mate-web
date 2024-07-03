interface Props {
	label: string;
	id: string;
	name: string;
	placeholder: string;
}

export default function InputField({ label, id, name, placeholder }: Props) {
	return (
		<div aria-label="input-group" className="w-full flex gap-2 items-center">
			<label htmlFor={id}>{label}</label>
			<input
				name={name}
				id={id}
				type="text"
				placeholder={placeholder}
				className="border"
			/>
		</div>
	);
}
