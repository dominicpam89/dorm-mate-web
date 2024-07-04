export type TypeTask = {
	id: string;
	title: string;
	state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
};
