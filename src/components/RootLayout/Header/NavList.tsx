"use client";
import NavListItem from "./NavListItem";
import { navlist, TListItem } from "./utils";
import { usePathname } from "next/navigation";

interface Props {
	width?: "w-1/4" | "w-2/4" | "w-3/4";
}

const isActive = (item: TListItem, pathname: string) => {
	const isHomePage = pathname.length == 1;
	if (isHomePage && item.href == "/") return true;
	else return pathname.includes(item.href);
};
export default function NavList({ width = "w-2/4" }: Props) {
	const pathname = usePathname();
	return (
		<ul aria-label="list" className={`${width} flex gap-8 justify-center`}>
			{navlist.map((item) => {
				return (
					<NavListItem
						item={item}
						key={item.text}
						active={isActive(item, pathname)}
					/>
				);
			})}
		</ul>
	);
}
