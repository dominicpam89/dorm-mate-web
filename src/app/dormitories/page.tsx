import { dormitories } from "@/data/mock/dormitories";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata() {
	return {
		title: {
			template: "DormMate Selection | %S",
			default: "DormMate Selection",
		},
	} as Metadata;
}

export default function DormitoriesPage() {
	return (
		<ul aria-label="list" className="flex flex-col gap-4">
			{dormitories.map((dorm) => {
				return (
					<Link
						key={dorm.id}
						aria-label="list-item"
						className="flex flex-col gap-2 p-4 border hover:cursor-pointer hover:bg-primary-dark-color hover:text-primary-dark-contrast transition-all duration-300 ease-in-out"
						href={`/dormitories/${dorm.id}`}
					>
						<h1 className="text-base">{dorm.name}</h1>
						<h2 className="text-sm font-bold">{dorm.location}</h2>
					</Link>
				);
			})}
		</ul>
	);
}
