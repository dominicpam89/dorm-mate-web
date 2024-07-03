import { dormitories } from "@/data/mock/dormitories";
import Link from "next/link";

export default function RoomsPage() {
	return (
		<ul aria-label="list" className="flex flex-col gap-4">
			{dormitories.map((dorm) => {
				return (
					<li aria-label="list-item" className="flex flex-col gap-2">
						<Link href={`/dormitories/${dorm.id}`}>{dorm.name}</Link>
						<p>{dorm.location}</p>
					</li>
				);
			})}
		</ul>
	);
}
