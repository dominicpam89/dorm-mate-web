import { useState, useEffect } from "react";

const useStyle = () => {
	const twClasses = {
		menu: {
			base: "border p-4 transform transition-all ease-in-out duration-150",
			onMouseDown: "scale-90",
		},
	};
	return twClasses;
};

/**
 * @function useNavListMobileButton
 * @return {onMouseDownHandle, onMouseUpHandle} object - required for handling user's behavior in component
 *
 */
export const useNavListMobileButton = () => {
	const { base, onMouseDown } = useStyle().menu;

	/** set of style based on behavior */
	const [style, setStyle] = useState("");

	/** when component first mounted, use base style */
	useEffect(() => {
		setStyle(base);
	}, []);

	/** adding style based on event */
	const onMouseDownHandle = () => {
		setStyle(base + " " + onMouseDown);
	};
	const onMouseUpHandle = () => {
		setStyle(base);
	};
	return { onMouseDownHandle, onMouseUpHandle, style };
};
