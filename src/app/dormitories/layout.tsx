interface Props {
	children: React.ReactNode;
}

export default function LayoutPage({ children }: Props) {
	return (
		<section id="section-dormitories" className="flex flex-col gap-16">
			<div aria-label="title" className="flex flex-col gap-2 text-center">
				<h1 className="text-xl font-extrabold">Dormitories Rooms</h1>
				<p className="text-sm font-light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					expedita eius sit animi nihil accusamus repellat distinctio
					maxime ratione labore. Sapiente culpa labore facilis earum.
					Obcaecati nemo totam iste expedita?
				</p>
			</div>
			{children}
		</section>
	);
}
