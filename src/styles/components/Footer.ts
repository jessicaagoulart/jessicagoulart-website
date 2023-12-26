import { styled } from "..";

export const FooterContainer = styled("footer", {
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "flex-start",
	margin: "0 auto",

	maxWidth: "1400px",
	padding: "1rem 2rem",
	width: "100%",
});

export const IconsContainer = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",

	width: "40%",

	svg: {
		width: "2rem",
		height: "2rem",
		marginLeft: "1rem",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		fill: "$gray100",
		"&:hover": {
			transform: "scale(1.1)",
		},
	},
});
