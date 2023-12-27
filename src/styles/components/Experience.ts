import { styled } from "..";

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
