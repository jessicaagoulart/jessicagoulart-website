import { styled } from "..";

export const FooterContainer = styled("footer", {
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "flex-start",
	margin: "0 auto",

	maxWidth: "1400px",
	padding: "1rem 2rem",
	width: "100%",

	"@media only screen and (max-width: 500px)": {
		padding: "1rem 0rem",
		alignItems: "center",
	},
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

	"@media only screen and (max-width: 500px)": {
		svg: {
			marginLeft: "0.5rem",
		},
		width: "25%",
	},
});
