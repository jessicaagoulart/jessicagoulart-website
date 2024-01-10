import { styled } from "..";

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
		fontWeight: 500,
		padding: "0rem 1rem 1rem",
	},

	"@media (max-width: 1080px)": {
		form: {
			width: "300px !important",
		},
	},

	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "600px",

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
			width: "100%",
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
			width: "100%",
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
