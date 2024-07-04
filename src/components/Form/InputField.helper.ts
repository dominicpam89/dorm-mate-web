import { HTMLInputTypeAttribute } from "react";

export type TInputFieldFloatingType = "filled" | "outlined" | "standard";
export interface IInputFieldProps {
	id: string;
	label: string;
	disabled: boolean;
	type: HTMLInputTypeAttribute;
	inputFieldType: TInputFieldFloatingType;
}

export const useStyle = () => {
	type TypeTwClasses = {
		input: {
			[key in TInputFieldFloatingType]: string;
		};
		label: {
			[key in TInputFieldFloatingType]: string;
		};
	};
	const twClasses: TypeTwClasses = {
		input: {
			filled: `block rounded-lg px-3 pb-3 pt-6 w-full appearance-none 
                text-sm text-primary-dark-color bg-primary-light-color/40
                border-0 border-b-2 border-primary-dark-contrast 
                focus:outline-none focus:ring-0 focus:border-primary-dark-color/20
                peer`,
			outlined: `block px-3 pb-3 pt-5 w-full 
                text-sm text-secondary-dark-color/90 bg-transparent rounded-lg 
                border border-1 border-secondary-dark-color/10 appearance-none
                focus:outline-none focus:ring-0 focus:border-secondary-dark-color/30 
                peer`,
			standard: `block py-2.5 px-0 w-full text-sm text-secondary-dark-color/90 bg-transparent 
                border-0 border-b-2 border-secondary-dark-color/10 appearance-none 
                focus:outline-none focus:ring-0 focus:border-secondary-dark-color/50 peer`,
		},
		label: {
			filled: `absolute 
                text-sm text-primary-dark-color/90
                duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-3 
                peer-focus:text-primary-dark-color/90
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-3 
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`,
			outlined: `absolute text-sm text-secondary-dark-color 
                duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-[0] 
                bg-transparent px-3 peer-focus:px-3 peer-focus:text-secondary-main-color 
                peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-3
                peer-placeholder-shown:top-1/2 
				peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-1 
                rtl:peer-focus:translate-x-3 rtl:peer-focus:left-auto start-1`,
			standard: `absolute text-sm text-secondary-dark-color/70
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-focus:start-0 peer-focus:text-secondary-dark-color/40 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`,
		},
	};
	return twClasses;
};
