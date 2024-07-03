import { screen, render } from "@testing-library/react";
import { expect, test } from "vitest";
import HomePage from "./page";

test("basic test", () => {
	render(<HomePage />);
	const title = screen.getByText(/homepage/i);
	expect(title).toBeInTheDocument();
});
