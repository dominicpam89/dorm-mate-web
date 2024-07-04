import {
	PropsUIButton,
	useStyleBase,
	useStyleButton,
	useStyleSize,
} from "./Button.helper";

export default function UIButton({
	text,
	size = "sm",
	color,
	displayType,
	rounded = "sm",
	disabled = false,
}: PropsUIButton) {
	const styleBase = useStyleBase(rounded);
	const styleSize = useStyleSize(size);
	const styleButton = useStyleButton();
	return (
		<button
			aria-label={`${text.toLowerCase()}`}
			className={`${styleBase} ${styleSize} ${styleButton[displayType][color]}`}
			disabled={disabled}
		>
			{text}
		</button>
	);
}
