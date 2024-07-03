'use client';

export const metadata = {
	title: 'Data Error',
};

export default function ErrorBoundary({
	error,
	retry,
}: {
	error: Error;
	retry: () => void;
}) {
	return (
		<div
			aria-label="error-page"
			className="w-full p-16 flex flex-col gap-2 justify-center items-center"
		>
			<h1 className="text-3xl font-bold">Error Layout</h1>
			<p>{error.message}</p>
			<button
				className="px-2 py-1 rounded-full font-bold"
				onClick={retry}
			>
				Try Again
			</button>
		</div>
	);
}
