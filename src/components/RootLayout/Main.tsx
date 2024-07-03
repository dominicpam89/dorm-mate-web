interface Props {
	children: React.ReactNode;
}

export default function UIMain({ children }: Props) {
	return <main className="min-h-dvh w-full p-8 md:p-16">{children}</main>;
}
