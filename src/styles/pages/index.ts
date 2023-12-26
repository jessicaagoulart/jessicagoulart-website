import { styled, keyframes } from "..";

export const Wrapper = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "space-between",
	minHeight: "100vh",
	width: "100%",
	height: "100%",

	paddingTop: "8rem",

	".anchor": {
		scrollMargin: "8rem",
	},
});

export const HomeContainer = styled("main", {
	display: "flex",
	justifyContent: "space-around",

	padding: "2rem",
	paddingBottom: "4rem",

	alignItems: "center",

	img: {
		borderRadius: "100%",
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

	".img-container:hover": {
		cursor: "pointer",
	},

	".img": {
		transition: "all 1s ease-in-out",
	},

	".img-container": {
		transition: "all 1s ease-in-out",
		left: "35%",
	},

	".img:hover": {
		transform: "scale(1.1)",
	},

	".text-container": {
		height: "0px",
		padding: 0,
		transition: "all 1s ease-in-out",
		position: "absolute",
		left: "35%",
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
});

export const Divider = styled("hr", {
	display: "flex",
	alignSelf: "center",
	width: "50%",
	border: "1px solid $purple500",
});

export const ExperienceContainer = styled("main", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	paddingTop: "3rem",
	paddingBottom: "3rem",

	h2: {
		fontSize: "2rem",
		color: "$gray100",
		textAlign: "center",
		marginBottom: "2rem",
	},
});

export const TableExperienceContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignSelf: "center",

	"&:hover": {
		cursor: "pointer",
	},

	backgroundColor: "$gray100",
	color: "$darkblue",

	margin: "1rem",
	padding: "1rem",
	border: "1px solid $purple500",
	borderRadius: 10,
	width: "600px",

	".table": {
		display: "grid",
		gridTemplateRows: "0fr",
		transition: "all 500ms ease-in-out",
	},

	".table .row ": {
		overflow: "hidden",
	},

	".title:hover + .table": {
		gridTemplateRows: "1fr",
		padding: "1rem",
	},

	".title": {
		position: "relative",
		color: "$purple500",
		fontSize: "1rem",
		fontWeight: 600,
	},

	span: {
		position: "absolute",
		right: 0,
	},

	".row": {
		p: {
			margin: "1rem 0",
		},
	},
});

export const SkillsContainer = styled("main", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	paddingTop: "3rem",
	paddingBottom: "3rem",

	h2: {
		fontSize: "2rem",
		color: "$gray100",
		textAlign: "center",
	},
});

export const FloatingButton = styled("div", {
	position: "fixed",
	bottom: 15,
	right: 40,
	zIndex: 2,

	width: 40,
	height: 40,

	borderRadius: "100%",
	backgroundColor: "#25D366",
	color: "$gray100",

	svg: {
		path: {
			fill: "$gray100",
		},
	},

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",

	transition: "all 500ms ease-in-out",

	"&:hover": {
		cursor: "pointer",
		filter: "brightness(50%)",
	},
});

export const ContactContainer = styled("main", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	paddingTop: "3rem",
	paddingBottom: "3rem",

	backgroundColor: "$gray100",

	h2: {
		fontSize: "2rem",
		color: "$purple500",
		textAlign: "center",
		marginBottom: "2rem",
	},

	h3: {
		fontSize: "1rem",
		color: "$purple500",
		textAlign: "center",
		marginBottom: "2rem",
		fontWeight: 500,
	},

	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",

		label: {
			fontSize: "1rem",
			color: "$purple500",
			fontWeight: 500,
			lineHeight: "1rem",
			display: "flex",
			alignSelf: "flex-start",
			padding: "1rem 0rem 0.5rem 0rem",
		},

		input: {
			padding: "1rem",
			border: "1px solid $purple300",
			backgroundColor: "$purple100",
			borderRadius: 10,
			width: "600px",
		},

		"input:focus": {
			outline: "none",
			border: "1px solid $purple500",
		},

		textarea: {
			padding: "1rem",
			border: "1px solid $purple300",
			backgroundColor: "$purple100",
			borderRadius: 10,
			width: "600px",
		},

		"textarea:focus": {
			outline: "none",
			border: "1px solid $purple500",
		},

		button: {
			marginTop: "2rem",
			padding: "0.5rem",
			display: "flex",
			alignSelf: "flex-end",
			border: "1px solid $purple300",
			backgroundColor: "$purple500",
			borderRadius: 10,
			color: "$gray100",
			fontWeight: 400,
			fontSize: "1rem",
			transition: "all 500ms ease-in-out",

			"&:hover": {
				cursor: "pointer",
				filter: "brightness(50%)",
			},

			"&:disabled": {
				filter: "brightness(50%)",
				cursor: "not-allowed",
			},
		},
	},
});
