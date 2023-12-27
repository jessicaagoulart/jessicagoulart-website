import { keyframes, styled } from "..";

export const AboutTextContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",

	transition: "all 1s ease-in-out",

	overflow: "hidden",

	margin: "2rem",

	h1: {
		fontSize: "3rem",
		color: "$purple500",
		textAlign: "center",
	},

	height: "0px",
	padding: 0,
	position: "absolute",
	left: "35%",

	"@media only screen and (max-width: 1080px)": {
		position: "relative",
		height: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		left: "0%",
		right: "0%",
		textAlign: "center",
	},
});

export const AboutContainer = styled("main", {
	position: "relative",
	display: "flex",
	justifyContent: "center",
	width: "100%",
	height: "420px",

	transition: "all 1s ease-in-out",

	"&:hover": {
		".img-container": {
			left: "10%",
		},
		".text-container": {
			height: "350px",
			padding: "1rem 2rem",
		},
	},

	backgroundColor: "$gray100",
	paddingBottom: "3rem",

	color: "$darkblue",

	svg: {
		stroke: "$purple300",
		path: {
			fill: "$purple500",
		},
	},

	paddingTop: "2rem",
	alignItems: "center",

	p: {
		paddingTop: "2rem",
		maxWidth: 800,
	},

	".img": {
		transition: "all 1s ease-in-out",
	},

	".img:hover": {
		transform: "scale(1.1)",
	},

	"@media (max-width: 1080px)": {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
});

export const AboutImgContainer = styled("div", {
	position: "absolute",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "400ppx",
	height: "400px",

	borderRadius: "50%",

	img: {
		borderRadius: "50%",
		zIndex: 1,
	},

	svg: {
		position: "absolute",
		width: "10%",
		height: "10%",
		zIndex: 2,
		bottom: 40,
		right: 80,
	},

	transition: "all 1s ease-in-out",
	left: "35%",

	"&:hover": {
		cursor: "pointer",
	},

	"@media only screen and (max-width: 1080px)": {
		display: "none",
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
