"use client";
import { IInputFieldComponentProps } from "./../InputField.type";

export default function FloatingOutline({
	id,
	label,
	disabled = false,
}: IInputFieldComponentProps) {
	return (
		<div className="relative">
			<input
				type="text"
				id={id}
				className="block px-3 pb-3 pt-5 w-full 
                text-sm text-secondary-dark-color/90 bg-transparent rounded-lg 
                border border-1 border-secondary-dark-color/10 appearance-none
                focus:outline-none focus:ring-0 focus:border-secondary-dark-color/30 
                peer"
				placeholder=" "
				disabled={disabled}
			/>
			<label
				htmlFor={id}
				className="absolute text-sm text-secondary-dark-color 
                duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-[0] 
                bg-transparent px-3 peer-focus:px-3 peer-focus:text-secondary-main-color 
                peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-3
                peer-placeholder-shown:top-1/2 
				peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-1 
                rtl:peer-focus:translate-x-3 rtl:peer-focus:left-auto start-1"
			>
				{label}
			</label>
		</div>
	);
}
