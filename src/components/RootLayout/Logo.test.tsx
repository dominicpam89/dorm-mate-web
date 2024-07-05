import { screen, render, within } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import NavLogo from "./Logo";

describe("definition testing", () => {
	beforeEach(() => {
		render(<NavLogo />);
	});
	test("logo container is in the document", () => {
		const container = screen.getByLabelText(/container/i);
		expect(container).toBeInTheDocument();
	});
	test("logo-link is in the document", () => {
		const logoLink = screen.getByLabelText(/logo-link/i);
		expect(logoLink).toBeInTheDocument();
	});
	test("logo-text is in the document", () => {
		const logoText = screen.getByLabelText("logo-text", {
			exact: true,
		});
		expect(logoText).toBeInTheDocument();
	});
});

describe("testing if element is wrapped in proper manner", () => {
	beforeEach(() => {
		render(<NavLogo />);
	});
	test("logo container is wrapping logo-link and logo-text", () => {
		const container = screen.getByLabelText(/container/i);
		const logoLink = within(container).getByLabelText(/logo-link/i);
		const logoText = within(container).getByLabelText("logo-text", {
			exact: true,
		});
		expect(logoLink).toBeDefined();
		expect(logoText).toBeDefined();
	});
});

describe("testing if text elements change color when hovered", () => {
	beforeEach(() => {
		render(<NavLogo />);
	});
	test("text Dorm change color, from primary into secondary color, when hovered", async () => {
		const logoText = screen.getByLabelText("logo-text", { exact: true });
		const textDorm = screen.getByLabelText("logo-text-dorm", {
			exact: true,
		});
		expect(textDorm).toHaveClass("text-primary-main-color");
		await userEvent.hover(logoText);
		expect(textDorm).toHaveClass("text-secondary-dark-color");
	});
	test("text Mate change color, from secondary to primary, when hovered", async () => {
		const logoText = screen.getByLabelText("logo-text", { exact: true });
		const textMate = screen.getByLabelText("logo-text-mate", {
			exact: true,
		});
		expect(textMate).toHaveClass("text-secondary-dark-color");
		await userEvent.hover(logoText);
		expect(textMate).toHaveClass("text-primary-main-color");
	});
});
