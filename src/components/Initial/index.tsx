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

				<h2>Frontend Developer</h2>

				<p>
					Hey, tudo bem? 😊
					<br />
					<br />
					Sou uma apaixonada por Front-end e praticamente respiro ReactJS há
					três anos! 🚀
					<br />
					<br />
					Estou trilhando minha jornada na Engenharia da Computação na PUC Minas
					enquanto transformo linhas de código em verdadeira arte digital. 💻✨
				</p>
			</TextContainer>

			<ImgContainer>
				<Image src={JessicaImg} width={350} alt="foto" className="image" />

				<ImagePulse />
			</ImgContainer>
		</HomeContainer>
	);
}
