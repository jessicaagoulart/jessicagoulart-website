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
				<h1>Sobre mim.</h1>

				<p>
					🌟💻Tenho 26 anos e uma trajetória singular, partindo da medicina em
					transição de carreira e navegando rumo à Engenharia da Computação.
					<br />
					<br />
					👨‍💻🔬 Essa jornada despertou minha paixão pela tecnologia. Atualmente
					no segundo ano do curso, mergulho nas complexidades do desenvolvimento
					web. Minha incursão no mundo digital foi marcada pelo fascínio por
					ReactJS.
					<br />
					<br />
					🚀🖥️ Transformei meu interesse em habilidades concretas, desenvolvendo
					interfaces envolventes e funcionais. Desde então, cada linha de código
					é uma oportunidade para criar soluções intuitivas e impactantes. Em
					busca de desafios que estimulem a criatividade e impulsionem a
					inovação, almejo contribuir para projetos que redefinam experiências
					online.
					<br />
					<br />
					💡🌐 Juntos, podemos construir uma jornada digital memorável. 🤝✨
				</p>
			</AboutTextContainer>
		</AboutContainer>
	);
}
