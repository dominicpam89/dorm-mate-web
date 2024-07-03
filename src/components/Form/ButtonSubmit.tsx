interface Props {
	text: string;
}

export default function FormButtonSubmit({ text }: Props) {
	return (
		<button
			className="px-3 py-1 rounded-lg bg-slate-800 text-white 
			hover:bg-teal-700
			transition-all duration-300 ease-out"
			type="submit"
		>
			{text}
		</button>
	);
}
