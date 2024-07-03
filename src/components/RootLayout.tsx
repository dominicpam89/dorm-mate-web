import UIHeader from "./RootLayout/Header";
import UIMain from "./RootLayout/Main";
import UIFooter from "./RootLayout/Footer";

interface Props {
	children: React.ReactNode;
}

export default function LayoutPage({ children }: Props) {
	return (
		<>
			<UIHeader />
			<UIMain>{children}</UIMain>
			<UIFooter />
		</>
	);
}
