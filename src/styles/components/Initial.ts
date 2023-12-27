import { keyframes, styled } from "..";

export const HomeContainer = styled("main", {
	display: "flex",
	justifyContent: "space-around",

	padding: "2rem",
	paddingBottom: "4rem",

	alignItems: "center",

	img: {
		borderRadius: "100%",
	},

	"@media only screen and (max-width: 1080px)": {
		width: "100%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		paddingTop: "0rem",
	},
});

export const TextContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	width: 400,

	p: {
		paddingTop: "2rem",
		maxWidth: 500,
	},

	h1: {
		fontSize: "8rem",
		color: "$gray100",
		lineHeight: "7rem",
	},

	h2: {
		fontSize: "2rem",
		color: "$gray100",
		fontWeight: 600,
	},

	"@media only screen and (max-width: 1080px)": {
		width: "100%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		p: {
			textAlign: "center",
		},

		h1: {
			fontSize: "4rem",
			lineHeight: "4rem",
			textAlign: "center",
		},

		h2: {
			fontSize: "1.5rem",
		},
	},
});

const pulse = keyframes({
	"0%": {
		transform: "scale(0.9)",
		filter: "brightness(100%)",
		opacity: 1,
	},
	"50%": {
		transform: "scale(1.0)",
		filter: "brightness(150%)",
		opacity: 0.1,
	},
	"100%": {
		transform: "scale(0.9)",
		filter: "brightness(100%)",
		opacity: 0.1,
	},
});

export const ImgContainer = styled("div", {
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	img: {
		zIndex: 1,
	},

	"@media only screen and (max-width: 1080px)": {
		marginTop: "3rem",
	},
});

export const ImagePulse = styled("div", {
	position: "absolute",
	width: 400,
	height: 400,
	backgroundColor: "$purple500",
	border: "1px solid $purple500",
	borderRadius: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	zIndex: 0,

	animation: `${pulse} 1.2s infinite`,
});
