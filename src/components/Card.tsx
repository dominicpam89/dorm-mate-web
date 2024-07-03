import { motion, Variants } from "framer-motion";

interface Props {
	children: React.ReactNode;
	display?: boolean;
}

const cardVariants: Variants = {
	hidden: {
		opacity: 0,
		scaleY: 0,
		y: "100%",
		pointerEvents: "none",
		originY: 0,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
	visible: {
		opacity: 1,
		scaleY: 1,
		y: "0%",
		pointerEvents: "auto",
		originY: 0,
		transition: {
			duration: 0.3,
			delay: 0.05,
			ease: "easeInOut",
		},
	},
};

export default function UICard({ children, display = true }: Props) {
	return (
		<motion.div
			aria-label="card"
			className="relative w-full flex flex-col p-8 gap-4 shadow-lg shadow-slate-500/20"
			variants={cardVariants}
			initial="hidden"
			animate={display ? "visible" : "hidden"}
			exit="hidden"
		>
			{children}
			<div
				aria-label="card-btn-close"
				className="absolute top-0 right-0 p-8 cursor-pointer transition-all duration-150 ease-in-out text-rose-700 hover:text-red-300"
			>
				X
			</div>
		</motion.div>
	);
}
