"use client";
import { IInputFieldComponentProps } from "./../InputField.type";

export default function FloatingFilled({
	id,
	label,
}: IInputFieldComponentProps) {
	return (
		<div className="relative">
			<input
				type="text"
				id={id}
				className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full 
                appearance-none 
                text-sm text-secondary-dark-color bg-secondary-dark-contrast 
                border-0 border-b-2 border-secondary-dark-contrast 
                focus:outline-none focus:ring-0 focus:border-secondary-dark-color 
                peer"
				placeholder=" "
			/>
			<label
				htmlFor={id}
				className="absolute 
                text-sm text-gray-500  
                duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 
                peer-focus:text-blue-600 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-4 
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
			>
				{label}
			</label>
		</div>
	);
}
