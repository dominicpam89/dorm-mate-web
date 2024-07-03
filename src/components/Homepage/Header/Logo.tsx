"use client";
import { useState } from "react";

interface Props {
	width?: "w-1/4" | "w-2/4" | "w-3/4";
}

const useStyles = (hover: boolean) => {
	const transitionClass = "transition-all ease-in-out duration-300";
	const logoImageClass = "h-8";

	const classesData = {
		logoTextPhi: `${
			hover ? "text-secondary-dark-color" : "text-primary-main-color"
		} ${transitionClass}`,
		logoTextFinance: `${
			hover ? "text-primary-main-color" : "text-secondary-dark-color"
		} ${transitionClass}`,
		logoImage: `${logoImageClass} ${hover ? "animate-cool-spin" : ""}`,
	};

	return classesData;
};

export default function NavLogo({ width = "w-1/4" }: Props) {
	const [hover, setHover] = useState(false);
	const { logoTextFinance, logoTextPhi, logoImage } = useStyles(hover);
	return (
		<div className={`${width}`}>
			<a
				href="https://dormate.co.id"
				className="flex items-center space-x-2"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<span
					aria-label="logo-text"
					className="self-center text-lg font-semibold whitespace-nowrap"
				>
					<span aria-label="logo-text-phi" className={logoTextPhi}>
						Dorm
					</span>
					<span aria-label="logo-text-finance" className={logoTextFinance}>
						Mate
					</span>
				</span>
			</a>
		</div>
	);
}
