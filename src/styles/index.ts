import { createStitches } from "@stitches/react";

export const {
	config,
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
} = createStitches({
	theme: {
		colors: {
			white: "#fff",

			gray900: "#121214",
			gray800: "#202024",
			gray300: "#c4c4cc",
			gray100: "#e1e1e6",

			darkblue: "#171A26",

			purple500: "#592867",
			purple300: "#9945B0",
			purple200: "#B26CC6",
			purple100: "#C998D7",
		},
	},
});
