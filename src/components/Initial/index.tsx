import {
	HomeContainer,
	ImagePulse,
	ImgContainer,
	TextContainer,
} from "@/styles/components/Initial";
import Image from "next/image";
import JessicaImg from "../../assets/jessica.jpeg";

export default function Initial() {
	return (
		<HomeContainer id="start" className="anchor">
			<TextContainer>
				<h1>Jéssica Goulart.</h1>

				<h2>Frontend Software Developer</h2>

				<p>
					Hi there! 😊
					<br />
					<br />
					I&apos;m Jéssica Goulart, a Frontend Software Developer deeply
					passionate about building beautiful and functional user interfaces.
					For over 3 years, I&apos;ve been immersed in the React.js ecosystem —
					and I absolutely love it! 🚀
					<br />
					<br />
					I&apos;m currently pursuing a degree in Computer Science while turning
					lines of code into meaningful digital experiences. 💻✨
					<br />
					<br />
					Let&apos;s create something amazing together!
				</p>
			</TextContainer>

			<ImgContainer>
				<Image src={JessicaImg} width={350} alt="foto" className="image" />

				<ImagePulse />
			</ImgContainer>
		</HomeContainer>
	);
}
