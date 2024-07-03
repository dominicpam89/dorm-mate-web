import { screen, render, within } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import NavList from "./NavList";
import { navlist } from "./utils";

describe("component definition", () => {
	beforeEach(() => {
		render(<NavList />);
	});
});
