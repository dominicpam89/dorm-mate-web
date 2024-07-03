import { screen, render, within } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import NavListItem from "./NavListItem";
import { TListItem } from "./utils";

const fakeListItem: TListItem = {
	href: "/about",
	text: "About",
	icon: <>iconAbout</>,
};

describe("component definition", () => {
	beforeEach(() => {
		render(<NavListItem item={fakeListItem} active={false} />);
	});
	test("list item is in the document", () => {
		const item = screen.getByLabelText("nav-item");
		expect(item).toBeInTheDocument();
	});

	test("list item wraps icon element", () => {
		const item = screen.getByLabelText("nav-item");
		const icon = within(item).getByLabelText("icon");
		expect(icon).toBeInTheDocument();
	});

	test("list item wraps text element which has text equal to item.text props", () => {
		const item = screen.getByLabelText("nav-item");
		const itemText = within(item).getByText(fakeListItem.text, {
			exact: true,
		});
		expect(itemText).toBeInTheDocument();
	});
});

describe("list item's color when not active, and hover behavior", () => {
	beforeEach(() => {
		render(<NavListItem item={fakeListItem} active={false} />);
	});
	test("list item's color is secondary-dark when not hovered", () => {
		const item = screen.getByLabelText("nav-item");
		expect(item).toHaveClass("text-secondary-dark-color");
	});
	test("list item's color is primary-main when hovered", async () => {
		const item = screen.getByLabelText("nav-item");
		expect(item).toHaveClass("text-secondary-dark-color");
		await userEvent.hover(item);
		expect(item).toHaveClass("text-primary-main-color");
	});
});

describe("list item's color when active, and hover behavior", () => {
	beforeEach(() => {
		render(<NavListItem item={fakeListItem} active={true} />);
	});
	test("list item's color is primary-main", () => {
		const item = screen.getByLabelText("nav-item");
		expect(item).toHaveClass("text-primary-main-color");
	});
	test("list item's color remains primary-main, despite of hovered", async () => {
		const item = screen.getByLabelText("nav-item");
		expect(item).toHaveClass("text-primary-main-color");
		await userEvent.hover(item);
		expect(item).toHaveClass("text-primary-main-color");
	});
});

describe("list item underline's test", () => {
	beforeEach(() => {
		render(<NavListItem item={fakeListItem} active={false} />);
	});
	test("list item has underline, but the width is zero initially", () => {
		const item = screen.getByLabelText("nav-item");
		const underline = within(item).getByLabelText("underline");
		expect(underline).toBeInTheDocument();
		expect(underline).toHaveClass("w-0");
	});
	test("list item has underline, width is 50% when hovered", async () => {
		const item = screen.getByLabelText("nav-item");
		const underline = within(item).getByLabelText("underline");
		expect(underline).toBeInTheDocument();
		expect(underline).toHaveClass("w-0");
		await userEvent.hover(item);
		expect(underline).toHaveClass("w-1/2");
	});
});
