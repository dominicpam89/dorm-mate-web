"use client";
import { useDashboardReducer } from "@/hooks/dashboard/viewReducer";
import UICard from "@/components/Card";

interface Props {
	children: React.ReactNode;
	expenses: React.ReactNode;
	incomes: React.ReactNode;
	savings: React.ReactNode;
	statistic: React.ReactNode;
}

const cardToggleStyle = (active: boolean) => {
	const twClasses = {
		base: "px-3 py-2 rounded-md transform hover:scale-110 transition-all ease-in-out duration-300",
		active: "bg-slate-800 text-white",
		default: "text-slate-800",
	};
	return `${twClasses.base} ${active ? twClasses.active : twClasses.default}`;
};

export default function DashboardLayout({
	children,
	expenses,
	incomes,
	savings,
	statistic,
}: Props) {
	const { viewComponent, actionButtons, onToggle } = useDashboardReducer();
	return (
		<section
			aria-label="section-dashboard"
			className="w-full flex flex-col gap-8 justify-center items-center"
		>
			{/* Dashboard Title */}
			<div
				aria-label="dashboard-title"
				className="flex flex-col w-full gap-4 text-center"
			>
				<h1 className="font-extrabold text-2xl">Dashboard Page</h1>
				{children}
			</div>
			{/* Dashboard Cards Toggle */}
			<div
				aria-label="dashbord-cards-toggle"
				className="flex gap-4 justify-evenly items-center text-[11px]"
			>
				<h1 className="font-semibold text-sm">Toggle View</h1>
				{actionButtons.map((btn) => {
					const name = btn[0].toUpperCase() + btn.slice(1);
					return (
						<button
							className={cardToggleStyle(viewComponent[btn])}
							onClick={() => onToggle(btn)}
						>
							{name}
						</button>
					);
				})}
			</div>
			{/* Dashboard Cards */}
			<div
				aria-label="dashboard-cards"
				className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
			>
				<UICard display={viewComponent.expenses}>{expenses}</UICard>
				<UICard display={viewComponent.incomes}>{incomes}</UICard>
				<UICard display={viewComponent.savings}>{savings}</UICard>
				<UICard display={viewComponent.statistic}>{statistic}</UICard>
			</div>
		</section>
	);
}
