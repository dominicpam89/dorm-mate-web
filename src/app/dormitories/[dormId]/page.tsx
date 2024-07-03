import { dormitories } from "@/data/mock/dormitories";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
	params: {
		dormId: string;
	};
}

export default function DormPage({ params: { dormId } }: Props) {
	const id = parseInt(dormId);
	if (!id) return notFound();
	else {
		const dorm = dormitories.find((dorm) => dorm.id === id);
		if (!dorm) return notFound();
		return (
			<div aria-label="dorm-container" className="flex flex-col gap-4">
				<h1 className="text-3xl font-extrabold">{dorm.name}</h1>
				<h2 className="text-xl font-medium">{dorm.location}</h2>
				<p className="text-sm font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Laboriosam cumque pariatur beatae consequuntur hic, eaque
					accusamus sequi ratione dolorem quae ipsa architecto voluptatibus
					doloremque ipsum amet vitae, eos, eligendi at.
				</p>
				<Link href="/dormitories" className="px-3 py-2 rounded-md border">
					Back
				</Link>
			</div>
		);
	}
}
