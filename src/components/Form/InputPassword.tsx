interface Props {
	label: string;
	id: string;
	name: string;
}

export default function InputPassword({ label, id, name }: Props) {
	return (
		<div aria-label="input-group" className="w-full flex gap-2 items-center">
			<label htmlFor={id}>{label}</label>
			<input name={name} id={id} type="password" className="border" />
		</div>
	);
}
