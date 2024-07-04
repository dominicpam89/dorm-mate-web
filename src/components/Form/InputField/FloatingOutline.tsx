"use client";
import { Props } from "./prop";

export default function FloatingOutline({ id, label }: Props) {
	return (
		<div className="relative">
			<input
				type="text"
				id={id}
				className="block px-2.5 pb-2.5 pt-4 w-full 
                text-sm text-secondary-dark-color bg-transparent rounded-lg 
                border-1 border-secondary-dark-contrast appearance-none
                focus:outline-none focus:ring-0 focus:border-secondary-dark-color 
                peer"
				placeholder=" "
			/>
			<label
				htmlFor={id}
				className="absolute text-sm text-secondary-dark-color 
                duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                bg-secondary-dark-contrast px-2 peer-focus:px-2 peer-focus:text-secondary-main-color 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
			>
				{label}
			</label>
		</div>
	);
}
