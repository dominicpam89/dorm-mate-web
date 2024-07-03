import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import UIFooter from "./Footer";

test("footer is defined", () => {
	render(<UIFooter />);
	const footer = screen.getByLabelText("footer");
	expect(footer).toBeInTheDocument();
});
