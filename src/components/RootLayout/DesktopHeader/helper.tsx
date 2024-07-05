import {
	FaCircleDot,
	FaChalkboard,
	FaHashnode,
	FaBuilding,
} from "react-icons/fa6";

export type TListItem = { href: string; text: string; icon: React.ReactNode };

/**
 * @definition
 * navigation items used in <NavList /> component
 * which located in Header.tsx
 * @type {TListItem[]} array of navigation list items
 * @property {string} href - for next/link component
 * @property {string} text - for displayed text as in UI
 * @property {React.ReactNode} icon - contains react-icons icon
 */
export const navlist: TListItem[] = [
	{ href: "/about", text: "About", icon: <FaCircleDot /> },
	{ href: "/features", text: "Features", icon: <FaChalkboard /> },
	{ href: "/service", text: "Service", icon: <FaHashnode /> },
	{ href: "/dormitories", text: "Dormitories", icon: <FaBuilding /> },
];

/**
 * @definition
 * Props for managing the width of Header Nav's flex styled components
 * These components are:
 * 1. Logo
 * 2. NavList
 * 3. and possible Additional Navigation component
 * @example
 * <header>
 * 		<nav className="flex">
 * 			<NavLogo width="1/4" />
 * 			<NavList width="2/4" />
 * 			<AdditionalComponent width="1/4" />
 * 		</nav>
 * </header>
 */

export interface IProps {
	width?: "w-1/4" | "w-2/4" | "w-3/4";
}
