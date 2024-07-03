'use client';
import { usePathname } from 'next/navigation';
import UIHeader from './RootLayout/Header';
import UIMain from './RootLayout/Main';
import UIFooter from './RootLayout/Footer';

interface Props {
	children: React.ReactNode;
}

export default function LayoutPage({ children }: Props) {
	const pathname = usePathname();
	const isHomePage = pathname.length == 1;
	if (isHomePage) return <>{children}</>;
	else
		return (
			<>
				<UIHeader />
				<UIMain>{children}</UIMain>
				<UIFooter />
			</>
		);
}
