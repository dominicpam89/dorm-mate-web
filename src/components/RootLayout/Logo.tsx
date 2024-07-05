"use client";
import Link from "next/link";
import { useState } from "react";
import { IProps } from "./DesktopHeader/helper";

/**
 * @definition
 * Custom hook to generate tailwind classnames
 * With ability to change its classnames based on hover state
 * It also includes transition for smooth UI
 * @param {boolean} hover - The hover state.
 * @returns {{logoDorm:string; logoMate:string}} classesData - An object containing class names for different elements.
 * @returns {string} classesData.logoTextPhi - Class names for the "Phi" part of the logo text.
 * @returns {string} classesData.logoTextFinance - Class names for the "Finance" part of the logo text.
 */
const useStyles = (hover: boolean) => {
	const transitionClass = "transition-all ease-in-out duration-300";

	const classesData = {
		logoDorm: `${
			hover ? "text-secondary-dark-color" : "text-primary-main-color"
		} ${transitionClass}`,
		logoMate: `${
			hover ? "text-primary-main-color" : "text-secondary-dark-color"
		} ${transitionClass}`,
	};

	return classesData;
};

/**
 * NavLogo component that renders a logo with hover effects.
 * @param {IProps} props - The props object contains width control filled with default value.
 * @returns {JSX.Element} The rendered NavLogo component.
 */
export default function NavLogo({ width = "w-1/4" }: IProps) {
	const [hover, setHover] = useState(false);
	const { logoMate, logoDorm } = useStyles(hover);
	return (
		<div aria-label="logo-container" className={`${width}`}>
			<Link
				aria-label="logo-link"
				href="/"
				className="flex items-center space-x-2"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<span
					aria-label="logo-text"
					className="self-center text-lg font-semibold whitespace-nowrap"
				>
					<span aria-label="logo-text-dorm" className={logoDorm}>
						Dorm
					</span>
					<span aria-label="logo-text-mate" className={logoMate}>
						Mate
					</span>
				</span>
			</Link>
		</div>
	);
}
