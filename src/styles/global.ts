import { globalCss } from ".";

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		"-webkit-font-smoothing": "antialiased",
		"::-webkit-scrollbar": {
			width: "5px",
		},

		"::-webkit-scrollbar-track": {
			background: "$gray300",
		},

		"::-webkit-scrollbar-thumb": {
			background: "$purple300",
		},

		"::-webkit-scrollbar-thumb:hover": {
			background: "$purple500",
		},
	},

	body: {
		background:
			"linear-gradient(0deg, rgba(89,40,103,1) 0%, rgba(75,37,89,1) 9%, rgba(57,33,72,1) 27%, rgba(54,33,69,1) 41%, rgba(55,33,70,1) 51%, rgba(23,26,38,1) 83%)",
		color: "$gray100",
	},

	"body,input,textarea,button": {
		fontFamily: "Montserrat",
		fontWeight: 400,
	},
});
