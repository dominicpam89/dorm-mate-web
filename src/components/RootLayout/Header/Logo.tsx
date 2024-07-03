"use client";
import Link from "next/link";
import { useState } from "react";

interface Props {
	width?: "w-1/4" | "w-2/4" | "w-3/4";
}

const useStyles = (hover: boolean) => {
	const transitionClass = "transition-all ease-in-out duration-300";

	const classesData = {
		logoTextPhi: `${
			hover ? "text-secondary-dark-color" : "text-primary-main-color"
		} ${transitionClass}`,
		logoTextFinance: `${
			hover ? "text-primary-main-color" : "text-secondary-dark-color"
		} ${transitionClass}`,
	};

	return classesData;
};

export default function NavLogo({ width = "w-1/4" }: Props) {
	const [hover, setHover] = useState(false);
	const { logoTextFinance, logoTextPhi } = useStyles(hover);
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
					<span aria-label="logo-text-dorm" className={logoTextPhi}>
						Dorm
					</span>
					<span aria-label="logo-text-mate" className={logoTextFinance}>
						Mate
					</span>
				</span>
			</Link>
		</div>
	);
}
