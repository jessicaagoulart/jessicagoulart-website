import { styled } from "..";

export const Wrapper = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "space-between",
	minHeight: "100vh",
	width: "100%",
	height: "100%",

	paddingTop: "8rem",

	".anchor": {
		scrollMargin: "6rem",
	},

	"@media only screen and (max-width: 1080px)": {
		paddingTop: "5rem",
	},
});

export const Divider = styled("hr", {
	display: "flex",
	alignSelf: "center",
	width: "50%",
	border: "1px solid $purple500",
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
	right: 15,
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

	a: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	"&:hover": {
		cursor: "pointer",
		filter: "brightness(50%)",
	},

	"@media only screen and (max-width: 500px)": {
		right: 20,
	},
});
