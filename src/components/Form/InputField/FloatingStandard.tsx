import { IInputFieldComponentProps } from "./../InputField.type";

export default function FloatingStandard({
	id,
	label,
	disabled = false,
}: IInputFieldComponentProps) {
	return (
		<div className="relative z-0">
			<input
				type="text"
				id={id}
				className="block py-2.5 px-0 w-full text-sm text-secondary-dark-color/90 bg-transparent 
                border-0 border-b-2 border-secondary-dark-color/10 appearance-none 
                focus:outline-none focus:ring-0 focus:border-secondary-dark-color/50 peer"
				placeholder=" "
				disabled={disabled}
			/>
			<label
				htmlFor={id}
				className="absolute text-sm text-secondary-dark-color/70
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-focus:start-0 peer-focus:text-secondary-dark-color/40 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
			>
				{label}
			</label>
		</div>
	);
}
