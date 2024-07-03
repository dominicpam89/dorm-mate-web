import { screen, render } from "@testing-library/react";
import { test, expect, vi, Mock } from "vitest";
import NavList from "./NavList";
import { usePathname } from "next/navigation";

vi.mock("next/navigation", () => {
	return {
		usePathname: vi.fn(),
	};
});

vi.mock("./utils", () => {
	const originalModule = vi.importActual("./utils");
	return {
		...originalModule,
		navlist: [
			{ text: "fake1", href: "/fake1", icon: <>fake1 icon</> },
			{ text: "fake2", href: "/fake2", icon: <>fake2 icon</> },
			{ text: "fake3", href: "/fake3", icon: <>fake3 icon</> },
		],
	};
});

describe("component definition", () => {
	let pathname: Mock<any, any>;
	beforeEach(() => {
		pathname = (usePathname as Mock).mockReturnValue("/");
		render(<NavList />);
	});
	test("list container is in the document", () => {
		const list = screen.getByRole("list");
		expect(list).toBeInTheDocument();
	});
	test("list items total is equal to navlist.length", () => {
		const listItems = screen.getAllByRole("link");
		expect(listItems.length).toEqual(3);
	});
});
