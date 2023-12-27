import { styled } from "..";

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
