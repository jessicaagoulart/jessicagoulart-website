import IconReact from "../../assets/react.svg";
import IconJavascript from "../../assets/javascript.svg";
import IconRedux from "../../assets/redux.svg";
import IconScrum from "../../assets/scrum.png";
import IconNext from "../../assets/nextjs.svg";
import IconTailwind from "../../assets/tailwindcss.png";
import IconStyledComponents from "../../assets/styled-components.png";
import IconHtml from "../../assets/html.svg";
import IconCss from "../../assets/css.svg";
import IconGit from "../../assets/git.svg";

import Image from "next/image";
import { Container, Title } from "@/styles/components/Carousel";

export default function Carousel() {
	return (
		<Container>
			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconReact} alt="Scrum" width={100} />
					<div className="percent">90%</div>
					<Title>ReactJS</Title>
				</div>
			</div>
			<div className="wrapper">
				<div className="item">
					<Image
						className="image"
						src={IconJavascript}
						alt="Javascript"
						width={100}
					/>
					<div className="percent">90%</div>
					<Title>Javascript</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconHtml} alt="HTML" width={100} />
					<div className="percent">90%</div>
					<Title>HTML</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconCss} alt="CSS" width={100} />
					<div className="percent">90%</div>
					<Title>CSS</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconGit} alt="Git" width={100} />
					<div className="percent">80%</div>
					<Title>Git</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconRedux} alt="Redux" width={100} />
					<div className="percent">80%</div>
					<Title>Redux</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconScrum} alt="Scrum" width={100} />
					<div className="percent">80%</div>
					<Title>Scrum</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image
						className="image"
						src={IconStyledComponents}
						alt="Styled Components"
						width={100}
					/>
					<div className="percent">90%</div>
					<Title>Styled Components</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image className="image" src={IconNext} alt="NextJS" width={100} />
					<div className="percent">70%</div>
					<Title>NextJS</Title>
				</div>
			</div>

			<div className="wrapper">
				<div className="item">
					<Image
						className="image"
						src={IconTailwind}
						alt="TailwindCSS"
						width={100}
					/>
					<div className="percent">70%</div>
					<Title>TailwindCSS</Title>
				</div>
			</div>
		</Container>
	);
}
