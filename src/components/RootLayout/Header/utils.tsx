import {
	FaCircleDot,
	FaChalkboard,
	FaHashnode,
	FaBuilding,
} from "react-icons/fa6";

export type TListItem = { href: string; text: string; icon: React.ReactNode };

export const navlist: TListItem[] = [
	{ href: "/about", text: "About", icon: <FaCircleDot /> },
	{ href: "/features", text: "Features", icon: <FaChalkboard /> },
	{ href: "/service", text: "Service", icon: <FaHashnode /> },
	{ href: "/dormitories", text: "Dormitories", icon: <FaBuilding /> },
];
