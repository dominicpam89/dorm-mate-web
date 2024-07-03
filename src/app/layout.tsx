import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutPage from "@/components/RootLayout";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "DormMate | %s",
		default: "DormMate | Homepage",
	},
	description:
		"DormMate provides dormitory management service for students and owners alike",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<LayoutPage>{children}</LayoutPage>
			</body>
		</html>
	);
}
