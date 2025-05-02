import Image from "next/image";
import { LuMousePointerClick } from "react-icons/lu";
import {
	AboutContainer,
	AboutImgContainer,
	AboutTextContainer,
	ImagePulse,
} from "@/styles/components/About";

import Jessica2Img from "../../assets/jessica_2.png";

export default function About() {
	return (
		<AboutContainer id="about" className="anchor">
			<AboutImgContainer className="img-container">
				<Image className="img" src={Jessica2Img} width={350} alt="foto" />

				<LuMousePointerClick />

				<ImagePulse />
			</AboutImgContainer>
			<AboutTextContainer className="text-container">
				<h1>About me.</h1>

				<p>
					🌟💻 I&apos;m 27 years old and have followed a unique path —
					transitioning from medical school into the exciting world of Computer
					Science.
					<br />
					<br />
					👨‍💻🔬 This journey sparked my passion for technology. Now in my fourth
					year of the program, I&apos;ve been diving deep into the complexities
					of web development, where React.js first captured my interest.
					<br />
					<br />
					🚀🖥️ What began as curiosity has grown into a solid set of skills. I
					focus on building engaging, functional interfaces that deliver
					intuitive and impactful user experiences. Every line of code is an
					opportunity to solve real problems and bring ideas to life.
					<br />
					<br />
					💡🌐 I&apos;m driven by challenges that fuel creativity and
					innovation, and I&apos;m eager to contribute to projects that shape
					the future of digital experiences.
					<br />
					<br />
					🤝✨ Let&apos;s build something memorable together.
				</p>
			</AboutTextContainer>
		</AboutContainer>
	);
}
