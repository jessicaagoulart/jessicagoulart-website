import emailjs from "@emailjs/browser";

import {
	AboutContainer,
	AboutImgContainer,
	AboutTextContainer,
	Divider,
	TableExperienceContainer,
	HomeContainer,
	ImagePulse,
	ImgContainer,
	SkillsContainer,
	TextContainer,
	Wrapper,
	ExperienceContainer,
	FloatingButton,
	ContactContainer,
} from "@/styles/pages";
import Image from "next/image";

import { LuMousePointerClick } from "react-icons/lu";
import JessicaImg from "../assets/jessica.jpeg";
import Jessica2Img from "../assets/jessica_2.png";
import Carousel from "@/components/Carousel";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import React, { FormEvent } from "react";

export default function Home() {
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [name, setName] = React.useState("");

	const form = React.useRef<HTMLFormElement>(null);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			name: { value: string };
			email: { value: string };
			message: { value: string };
		};

		const templateParams = {
			from_name: target.name.value,
			email: target.email.value,
			message: target.message.value,
		};

		emailjs
			.send(
				process.env.REACT_APP_SERVICE_ID!,
				process.env.REACT_APP_TEMPLATE_ID!,
				templateParams,
				process.env.REACT_APP_USER_ID!
			)
			.then((result) => {
				console.log(result.text);
				setEmail("");
				setMessage("");
				setName("");

				alert("Mensagem enviada com sucesso!");
			})
			.then(
				() => {
					form?.current?.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Wrapper>
			<FloatingButton>
				<Link
					className="button"
					href="https://wa.me/31971673786?text=Olá, Jéssica!"
					target="_blank"
				>
					<FaWhatsapp />
				</Link>
			</FloatingButton>

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
						Estou trilhando minha jornada na Engenharia da Computação na PUC
						Minas enquanto transformo linhas de código em verdadeira arte
						digital. 💻✨
					</p>
				</TextContainer>

				<ImgContainer>
					<Image src={JessicaImg} width={350} alt="foto" className="image" />

					<ImagePulse />
				</ImgContainer>
			</HomeContainer>

			<Divider />

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
						no segundo ano do curso, mergulho nas complexidades do
						desenvolvimento web. Minha incursão no mundo digital foi marcada
						pelo fascínio por ReactJS.
						<br />
						<br />
						🚀🖥️ Transformei meu interesse em habilidades concretas,
						desenvolvendo interfaces envolventes e funcionais. Desde então, cada
						linha de código é uma oportunidade para criar soluções intuitivas e
						impactantes. Em busca de desafios que estimulem a criatividade e
						impulsionem a inovação, almejo contribuir para projetos que
						redefinam experiências online.
						<br />
						<br />
						💡🌐 Juntos, podemos construir uma jornada digital memorável. 🤝✨
					</p>
				</AboutTextContainer>
			</AboutContainer>

			<Divider />

			<ExperienceContainer id="experience" className="anchor">
				<h2>Minha experiência</h2>
				<TableExperienceContainer>
					<div className="title">
						Experiência 1 (Estágio de Trainee na Compasso UOL):
					</div>
					<div className="table">
						<div className="row">
							<p>• Maio de 2021 a Agosto de 2021.</p>
							<p>
								• Estágio de 3 meses desenvolvendo uma plataforma de filmes
								inspirada na Netflix.
							</p>

							<p>
								• Projeto em React JS utilizando principais ferramentas como
								Redux, Axios e Styled-Components.
							</p>
						</div>
					</div>
				</TableExperienceContainer>
				<TableExperienceContainer>
					<div className="title">
						Experiência 2 (Desenvolvedora React JS Junior na Compasso UOL):
					</div>
					<div className="table">
						<div className="row">
							<p>• Agosto de 2021 a Março de 2022.</p>

							<p>
								• Trabalho com React Native no suporte de um aplicativo para
								cliente varejista.
							</p>
							<p>
								• Utilização de tecnologias como Redux, Styled-Components, Axios
								e Testing Library.
							</p>
							<p>
								• Correção de bugs, implementação de novas telas e
								funcionalidades.
							</p>
						</div>
					</div>
				</TableExperienceContainer>
				<TableExperienceContainer>
					<div className="title">
						Experiência 3 (Desenvolvedora Junior a Pleno na Ioasys):
					</div>
					<div className="table">
						<div className="row">
							<p>• Março de 2022 até hoje.</p>
							<p>
								• Atuação em React JS no desenvolvimento web para cliente na
								área de logística.
							</p>
							<p>
								• Implementação de novas telas, funcionalidades, manipulação de
								formulários complexos, relatórios e gráficos.
							</p>

							<p>
								• Utilização das principais tecnologias do React para essas
								atividades.
							</p>
						</div>
					</div>
				</TableExperienceContainer>
			</ExperienceContainer>

			<Divider />

			<SkillsContainer id="skills" className="anchor">
				<h2>Minhas skills</h2>

				<Carousel />
			</SkillsContainer>

			<Divider />

			<ContactContainer id="contact">
				<h2>Contato</h2>
				<h3>
					Gostou do meu perfil? Entre em contato comigo pelo formulário abaixo!
				</h3>

				<form ref={form} onSubmit={onSubmit}>
					<label htmlFor="name">Nome</label>
					<input
						type="text"
						name="name"
						onChange={(e) => setName(e.target.value)}
					/>

					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="message">Mensagem</label>
					<textarea
						name="message"
						onChange={(e) => setMessage(e.target.value)}
					/>

					<button type="submit" disabled={!email || !message || !name}>
						Enviar
					</button>
				</form>
			</ContactContainer>
		</Wrapper>
	);
}
