"use client";
import { navlist, TListItem } from "./utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
	width?: "w-1/4" | "w-2/4" | "w-3/4";
}
interface PropsLinkComp {
	item: TListItem;
	active: boolean;
}

const useStyles = (hover: boolean) => {
	const baseClasses = {
		link: "relative flex gap-1 items-center transition-all ease-in-out duration-300",
		line: "transition-all ease-in duration-300 absolute top-[80%] left-1/2 -translate-x-1/4 rounded-full bg-primary-main-color",
	};

	return {
		linkStyle: `${baseClasses.link} ${
			hover ? "text-primary-main-color" : "text-secondary-dark-color"
		}`,
		linkStyleActive: `${baseClasses.link} text-primary-main-color transform scale-[110%]`,
		lineStyle: `${baseClasses.line} ${hover ? "w-1/2 h-[2px]" : "w-0 h-0"}`,
		lineStyleActive: `${baseClasses.line}`,
	};
};

const LinkComp = ({ item, active }: PropsLinkComp) => {
	const [hover, setHover] = useState(false);
	const { linkStyle, linkStyleActive, lineStyle, lineStyleActive } =
		useStyles(hover);
	return (
		<Link
			aria-label="nav-item"
			href={item.href}
			className={active ? linkStyleActive : linkStyle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<span aria-label="icon" className="text-[0.7rem]">
				{item.icon}
			</span>
			<span aria-label="text" className="text-[0.9rem]">
				{item.text}
			</span>
			<div
				aria-label="underline"
				className={active ? lineStyleActive : lineStyle}
			></div>
		</Link>
	);
};

const isActive = (item: TListItem, pathname: string) => {
	const isHomePage = pathname.length == 1;
	if (isHomePage && item.href == "/") return true;
	else return pathname.includes(item.href);
};
export default function NavList({ width = "w-2/4" }: Props) {
	const pathname = usePathname();
	return (
		<ul className={`${width} flex gap-8 justify-center`}>
			{navlist.map((item) => {
				return (
					<LinkComp
						item={item}
						key={item.text}
						active={isActive(item, pathname)}
					/>
				);
			})}
		</ul>
	);
}
