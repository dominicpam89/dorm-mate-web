import NavLogo from "./Header/Logo";
import NavList from "./Header/NavList";

export default function HomeHeader() {
	return (
		<header>
			<nav className="bg-transparent fixed w-full z-[500] top-0 start-0 flex p-4">
				<NavLogo />
				<NavList />
				<div className="w-1/4">auth</div>
			</nav>
		</header>
	);
}
