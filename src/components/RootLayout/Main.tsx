interface Props {
	children: React.ReactNode;
}

export default function UIMain({ children }: Props) {
	return (
		<main className="min-h-dvh w-full p-8 py-16 md:p-16 md:py-32">
			{children}
		</main>
	);
}
