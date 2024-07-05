import { fn } from "@storybook/test";
import NavListMobile from "./NavList";
import { Meta, StoryObj } from "@storybook/react";

export const ActionData = {
	onMouseDownHandle: fn(),
	onMouseUpHandle: fn(),
};

export default {
	component: NavListMobile,
	title: "NavList - Desktop",
	tags: ["autodocs"],
	excludeStories: /actiondata/i,
	args: {
		...ActionData,
	},
} as Meta<typeof NavListMobile>;

export const Base = {};
