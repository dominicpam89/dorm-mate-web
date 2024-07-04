import { useEffect, useState } from "react";
import { TypeTask } from "./TaskItem.helper";

export interface TaskListProps {
	isLoading: boolean;
	tasks: TypeTask[];
	onPinTask: () => void;
	onArchiveTask: () => void;
}

export const mockTasks: TypeTask[] = [
	{
		id: "1",
		title: "Task 1: Complete the project proposal",
		state: "TASK_INBOX",
	},
	{
		id: "2",
		title: "Task 2: Review the code for module X",
		state: "TASK_INBOX",
	},
	{
		id: "3",
		title: "Task 3: Update the documentation",
		state: "TASK_ARCHIVED",
	},
	{
		id: "4",
		title: "Task 4: Fix the bug in the login feature",
		state: "TASK_INBOX",
	},
	{
		id: "5",
		title: "Task 5: Refactor the authentication module",
		state: "TASK_INBOX",
	},
	{
		id: "6",
		title: "Task 6: Plan the sprint retrospective",
		state: "TASK_ARCHIVED",
	},
];

const waitFor = (time: number = 1000) =>
	new Promise((resolve) => {
		setTimeout(() => resolve(true), time);
	});

const mockArchiveTask = async (id: string) => {
	await waitFor(500);
	const task = mockTasks.find((task) => task.id === id);
	const newTask = { ...task, state: "TASK_ARCHIVED" } as TypeTask;
	const newTasks = [...mockTasks.filter((task) => task.id === id), newTask];
	return newTasks;
};

const mockPinTask = async (id: string) => {
	await waitFor(500);
	const task = mockTasks.find((task) => task.id === id);
	const newTask = { ...task, state: "TASK_PINNED" } as TypeTask;
	const newTasks = [...mockTasks.filter((task) => task.id === id), newTask];
	return newTasks;
};

const mockFetchTasks = async (time: number) => {
	const [isLoading, setIsLoading] = useState(true);
	const [tasks, setTasks] = useState<Array<TypeTask>>([]);
	await waitFor(time);
	setIsLoading(false);
	setTasks(mockTasks);
	return {
		isLoading,
		tasks,
	};
};

export const useTasksOperation = async () => {
	let isLoading: boolean = true;
	let tasks: TypeTask[] = [];
	mockFetchTasks(1200).then((data) => {
		isLoading = data.isLoading;
		tasks = data.tasks;
	});
	return {
		isLoading,
		tasks,
		onArchiveTask: mockArchiveTask,
		onPinTask: mockPinTask,
	};
};
