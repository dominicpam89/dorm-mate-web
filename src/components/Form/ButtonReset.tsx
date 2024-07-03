interface Props {
	text: string;
}

export default function FormButtonReset({ text }: Props) {
	return (
		<button
			className="px-3 py-1 rounded-lg border border-slate-800 text-slate-800 
			hover:border-none hover:text-white hover:bg-teal-700
			transition-all duration-300 ease-out"
			type="reset"
		>
			{text}
		</button>
	);
}
