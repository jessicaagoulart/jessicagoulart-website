import { styled } from "..";

export const Wrapper = styled("div", {
	display: "flex",

	"@media (min-width: 500px)": {
		".navbar-icon": {
			display: "none",
		},
	},

	"@media (max-width: 500px)": {
		".navbar-icon": {
			display: "flex",
		},

		".navbar-icon:hover": {
			cursor: "pointer",
		},

		".navbar-icon:hover + ul": {
			width: "200px",
			height: "100%",
			opacity: "1",
			transform: "translateX(0)",
		},

		ul: {
			position: "fixed",
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			justifyContent: "center",
			top: "0",
			right: "0",
			bottom: "0",
			width: "0",
			height: "0%",
			opacity: "0",
			backgroundColor: "$darkblue",
			transition: "all 0.3s ease-in-out 0s",
			transform: "translateX(-100%)",

			li: {
				padding: "1rem",
			},
		},
	},
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
});

export const Subtitle = styled("p", {
	fontSize: "1rem",
	color: "$gray100",
	margin: "0.5rem 0",
});
