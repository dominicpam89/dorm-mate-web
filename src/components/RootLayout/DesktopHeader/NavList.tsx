"use client";
import NavListItem from "./NavListItem";
import { navlist, TListItem } from "./helper";
import { usePathname } from "next/navigation";
import { IProps } from "./helper";

/**
 * @description
 * Determines if a navigation item is active based on the current pathname.
 * Removing of "/" as HomePage and as root path.
 * Prevent bug by Adding "/" as part of ./utils/navlist item in the future.
 *
 * @purpose
 * is used by NavListItem component to determine
 * whether item should be having active styles or not
 *
 * @function isActive
 * @param {TListItem} item - based on navlist.map.
 * @param {string} pathname - based on current pathname.
 */
const isActive = (item: TListItem, pathname: string) => {
	const isHomePage = pathname.length == 1;
	if (isHomePage && item.href == "/") return true;
	else return pathname.includes(item.href);
};

/**
 * NavListItem component that renders a navigation list item with hover effects.
 * @function NavListDesktop
 * @param {Props} props - The props object which only contains width control
 * @returns {JSX.Element} The rendered NavListItem component.
 */
export default function NavListDesktop({ width = "w-2/4" }: IProps) {
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
