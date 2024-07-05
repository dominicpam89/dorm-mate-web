"use client";
import NavLogo from "./Logo";
import NavListDesktop from "./DesktopHeader/NavList";
import { useGetScreenWidth } from "@/data/hooks/screen-width";
import NavListMobile from "./MobileNav/NavList";

const DesktopNav = () => {
	return (
		<nav className="bg-transparent fixed w-full z-[500] top-0 start-0 flex p-4">
			<NavLogo />
			<NavListDesktop width="w-2/4" />
		</nav>
	);
};

const MobileNav = () => {
	return (
		<nav className="bg-transparent fixed w-full z-[500] top-0 start-0 flex p-4 justify-between">
			<NavLogo />
			<NavListMobile />
		</nav>
	);
};

export default function UIHeader() {
	const isMobile = useGetScreenWidth();
	if (!isMobile)
		return (
			<header>
				<DesktopNav />
			</header>
		);
	return (
		<header>
			<MobileNav />
		</header>
	);
}
