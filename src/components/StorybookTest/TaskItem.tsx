"use client";
import { TypeTask } from "./TaskItem.helper";

interface Props {
	task: TypeTask;
	onPinTask: () => void;
	onArchivedTask: () => void;
}

export default function TaskItem({ task, onPinTask, onArchivedTask }: Props) {
	return (
		<div aria-label="task-item" id={task.id} className="flex gap-2 text-base">
			<div
				aria-label="item-checkbox"
				className="flex justify-center items-center w-1/12 peer"
			>
				<label
					htmlFor="archived"
					className="text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					<input
						id="archived"
						type="checkbox"
						name="archived"
						className="w-4 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded 
						dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
						checked={task.state === "TASK_ARCHIVED"}
						onClick={onArchivedTask}
					/>
				</label>
			</div>
			<div className="relative z-0 w-full" aria-label="item-text">
				<input
					type="text"
					id="title"
					name="title"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					value={task.title}
					readOnly={true}
				/>
				<label
					htmlFor="title"
					className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				>
					{task.title}
				</label>
			</div>
			<div
				aria-label="item-pin"
				className="w-3/12 hover:cursor-pointer transform hover:scale-105"
				onClick={onPinTask}
			>
				{task.state === "TASK_PINNED" && <span className="w-full">📌</span>}
				{task.state !== "TASK_PINNED" && (
					<span className="w-full opacity-20">📌</span>
				)}
			</div>
		</div>
	);
}
