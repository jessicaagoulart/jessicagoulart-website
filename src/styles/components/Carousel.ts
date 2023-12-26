import { styled } from "..";

export const Container = styled("div", {
	marginTop: "2rem",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	width: "1080px",

	".wrapper": {
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "200px",
		height: "200px",
		overflow: "hidden",
		margin: "0.5rem",
	},

	".item": {
		padding: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "200px",
		height: "100%",
		margin: "0.5rem",
		zIndex: 1,

		".percent": {
			display: "none",
			fontSize: "2rem",
			height: "100px",
		},

		transition: "all 0.2s ease-in-out",

		"&:hover": {
			transform: "scale(1.1)",
			backgroundColor: "$darkblue",
			cursor: "pointer",

			".image": {
				display: "none",
			},

			".percent": {
				display: "flex",
				alignItems: "center",
			},
		},
	},
});

export const Title = styled("h2", {
	fontSize: "1.5rem !important",
	fontWeight: 500,
	marginBottom: "1rem",
});
