"use client";
import Link from "next/link";
import { useState } from "react";
import { TListItem } from "./helper";

/**
 * Props interface for the NavListItem component.
 * To Determined whether item should have active class
 * or not
 * @type {Object} Props
 * @property {TListItem} item - The navigation list item.
 * @property {boolean} active - Whether the item is active or not.
 */
interface Props {
	item: TListItem;
	active: boolean;
}

/**
 * @definition
 * Custom hook to generate tailwind classnames
 * With ability to change its classnames based on hover state
 * It also includes transition for smooth UI
 * @function useStyles
 * @param {boolean} hover - The hover state.
 * @returns {Object} classesData - An object containing class names for different elements.
 * @returns {string} classesData.linkStyle - Class names for the link element.
 * @returns {string} classesData.linkStyleActive - Class names for the active link element.
 * @returns {string} classesData.lineStyle - Class names for the underline element.
 */
const useStyles = (hover: boolean) => {
	const baseClasses = {
		link: "relative flex gap-1 items-center transition-all ease-in-out duration-300",
		line: "transition-all ease-in duration-300 absolute top-[90%] left-1/2 -translate-x-1/4 rounded-full bg-primary-main-color",
	};

	return {
		linkStyle: `${baseClasses.link} ${
			hover ? "text-primary-main-color" : "text-secondary-dark-color"
		}`,
		linkStyleActive: `${baseClasses.link} text-primary-main-color transform scale-[110%]`,
		lineStyle: `${baseClasses.line} ${hover ? "w-1/2 h-[2px]" : "w-0 h-0"}`,
	};
};

const NavListItemDesktop = ({ item, active }: Props) => {
	const [hover, setHover] = useState(false);
	const { linkStyle, linkStyleActive, lineStyle } = useStyles(hover);
	return (
		<Link
			aria-label="nav-item"
			href={item.href}
			className={!active ? linkStyle : linkStyleActive}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<span aria-label="icon" className="text-[0.7rem]">
				{item.icon}
			</span>
			<span aria-label="text" className="text-[0.9rem]">
				{item.text}
			</span>
			<div aria-label="underline" className={lineStyle}></div>
		</Link>
	);
};

export default NavListItemDesktop;
