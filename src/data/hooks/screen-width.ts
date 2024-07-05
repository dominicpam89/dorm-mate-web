import { useState, useEffect } from "react";

export const useGetScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState<number>(0);
	const isMobile = screenWidth < 720;
	/**
	 * @definition
	 * set screenWidth state when component's first mount
	 * detect change in window.innerWidth and set screenWidth accordingly
	 */
	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return isMobile;
};
