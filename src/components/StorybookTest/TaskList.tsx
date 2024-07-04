import TaskItem from "./TaskItem";
import { useTasksOperation } from "./TaskList.helper";

export default function TaskList() {
	const { isLoading, onArchiveTask, onPinTask, tasks } = useTasksOperation();
	if (isLoading)
		return (
			<div className="w-full flex justify-center items-center py-4">
				Loading...
			</div>
		);
	if (tasks.length === 0) {
		return (
			<div className="w-full min-h-lvh flex justify-center items-center">
				Empty...
			</div>
		);
	}

	const tasksInSort = [
		...tasks.filter((task) => task.state === "TASK_PINNED"),
		...tasks.filter((task) => task.state !== "TASK_PINNED"),
	];

	return (
		<ul>
			{tasksInSort.map((task) => {
				return (
					<TaskItem
						key={task.id}
						task={task}
						onArchivedTask={() => onArchiveTask(task.id)}
						onPinTask={() => onPinTask(task.id)}
					/>
				);
			})}
		</ul>
	);
}
