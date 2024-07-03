export default function HomeMain() {
	return (
		<section
			aria-label="section-1"
			className="
				flex flex-col gap-4 w-full 
				min-h-[80vh] items-center justify-center"
		>
			<h1 className="text-primary-main-color">
				test primary color
			</h1>
			<h1 className="text-secondary-main-color">
				test secondary color
			</h1>
			<h1 className="text-success-main-color">
				test success color
			</h1>
			<h1 className="text-info-main-color">test info color</h1>
			<h1 className="text-error-main-color">test error color</h1>
			<h1 className="text-warning-main-color">
				test warning color
			</h1>
		</section>
	);
}
