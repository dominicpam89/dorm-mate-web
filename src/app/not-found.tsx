export const metadata = {
	title: "404",
};

export default function NotFoundHomepage() {
	return (
		<div
			aria-label="not-found-page"
			className="w-full p-16 flex flex-col gap-2 justify-center items-center"
		>
			<h1 className="text-3xl font-bold">404</h1>
			<p>Page Not Found</p>
		</div>
	);
}
