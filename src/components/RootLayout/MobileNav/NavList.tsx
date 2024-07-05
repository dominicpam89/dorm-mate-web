import { FaBars } from "react-icons/fa6";
import { useNavListMobileButton } from "./NavList.helper";

export default function NavListMobile() {
	const { style, onMouseDownHandle, onMouseUpHandle } =
		useNavListMobileButton();
	return (
		<>
			<button
				className={style}
				onMouseDown={onMouseDownHandle}
				onMouseUp={onMouseUpHandle}
			>
				<FaBars />
			</button>
		</>
	);
}
