import { styled } from "..";

export const Wrapper = styled("div", {
	display: "flex",
});

export const NavbarContainer = styled("ul", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0 2rem",
	height: "4rem",
	color: "$gray100",

	li: {
		listStyle: "none",
		textDecoration: "none",
		fontStyle: "normal",
		padding: "0 1rem",
	},

	a: {
		textDecoration: "none",
		color: "$gray100",
		fontWeight: 400,
		position: "relative",
	},

	".link:before": {
		content: "",
		position: "absolute",
		width: "100%",
		height: 1,
		bottom: -2,
		left: 0,
		backgroundColor: "$purple300",
		visibility: "hidden",
		"-webkit-transform": "scaleX(0)",
		transform: "scaleX(0)",
		"-webkit-transition": "all 0.3s ease-in-out 0s",
		transition: "all 0.3s ease-in-out 0s",
	},

	".link:hover:before": {
		visibility: "visible",
		"-webkit-transform": "scaleX(1)",
		transform: "scaleX(1)",
	},

	"@media (max-width: 500px)": {
		marginLeft: "0rem",
		padding: "0rem",

		alignItems: "center",
		justifyContent: "center",

		li: {
			fontSize: "0.6rem",
		},
	},
});

export const Subtitle = styled("p", {
	fontSize: "1rem",
	color: "$gray100",
	margin: "0.5rem 0",
});
