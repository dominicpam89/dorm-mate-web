import TaskList from "./TaskList";
import { mockTasks, TaskListProps } from "./TaskList.helper";
import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ActionData as AD } from "./TaskItem.stories";

export default {
	component: TaskList,
	title: "Task List",
	tags: ["autodocs"],
	decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>],
	args: {
		...AD,
	},
} as StoryObj;

export const Loading = {
	args: {
		...AD,
		isLoading: true,
		tasks: [...mockTasks],
	},
};

export const WithPinnedTask = {
	args: {
		isLoading: false,
		tasks: [
			...mockTasks.slice(0, 3),
			{ id: "4", title: "pinned-1", state: "TASK_PINNED" },
			{ id: "5", title: "pinned-2", state: "TASK_PINNED" },
		],
		onArchiveTask: AD.onArchivedTask,
		onPinTask: AD.onPinTask,
	} as TaskListProps,
};

export const Empty = {
	args: {
		isLoading: false,
		tasks: [],
		onArchiveTask: AD.onArchivedTask,
		onPinTask: AD.onPinTask,
	} as TaskListProps,
};
