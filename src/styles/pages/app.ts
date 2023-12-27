import { styled } from "..";

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "space-between",
	minHeight: "100vh",
	width: "100%",
	height: "100%",
});

export const Header = styled("header", {
	position: "fixed",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	margin: "0 auto",
	width: "100%",
	padding: "1rem",
	height: "60px",

	top: "0",
	left: "0",
	right: "0",

	backgroundColor: "$darkblue",
	opacity: "0.9",

	zIndex: 1000,

	".logo": {
		position: "absolute",
		top: 10,
		left: 50,
	},

	"@media (max-width: 1080px)": {
		justifyContent: "center",
		".logo": {
			display: "none",
		},
	},
});

export const Main = styled("main", {
	display: "flex",
	flex: 1,
	paddingTop: "2rem",
	width: "100%",
	height: "100%",
});
