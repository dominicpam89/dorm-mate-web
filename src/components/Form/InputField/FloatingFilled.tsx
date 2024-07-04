"use client";
import { IInputFieldComponentProps } from "./../InputField.type";

export default function FloatingFilled({
	id,
	label,
	disabled = false,
}: IInputFieldComponentProps) {
	return (
		<div className="relative">
			<input
				type="text"
				id={id}
				className="block rounded-lg px-3 pb-3 pt-6 w-full appearance-none 
                text-sm text-primary-dark-color bg-primary-light-color/40
                border-0 border-b-2 border-primary-dark-contrast 
                focus:outline-none focus:ring-0 focus:border-primary-dark-color/20
                peer
				"
				placeholder=" "
				disabled={disabled}
			/>
			<label
				htmlFor={id}
				className="absolute 
                text-sm text-primary-dark-color/90
                duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-3 
                peer-focus:text-primary-dark-color/90
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-3 
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
			>
				{label}
			</label>
		</div>
	);
}
