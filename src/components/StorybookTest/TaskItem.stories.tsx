import TaskItem from "./TaskItem";
import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TypeTask } from "./TaskItem.helper";

export const ActionData = {
	onArchivedTask: fn(),
	onPinTask: fn(),
};

const defaultTask: TypeTask = {
	id: "1",
	title: "Default Task",
	state: "TASK_INBOX",
};

export default {
	component: TaskItem,
	title: "TaskItem",
	tags: ["autodocs"],
	excludeStories: /.Data$/,
	args: {
		...ActionData,
	},
} as StoryObj;

export const Default = {
	args: {
		task: {
			id: "1",
			title: "Test Task",
			state: "TASK_INBOX",
		} as TypeTask,
	},
};

export const Pinned = {
	args: {
		task: {
			id: "1",
			title: "Test Task",
			state: "TASK_PINNED",
		} as TypeTask,
	},
};

export const Archived = {
	args: {
		task: {
			id: "1",
			title: "Test Task",
			state: "TASK_ARCHIVED",
		},
	},
};
