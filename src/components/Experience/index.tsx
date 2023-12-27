import {
	ExperienceContainer,
	TableExperienceContainer,
} from "@/styles/components/Experience";

export default function Experience() {
	return (
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
							• Utilização de tecnologias como Redux, Styled-Components, Axios e
							Testing Library.
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
							• Atuação em React JS no desenvolvimento web para cliente na área
							de logística.
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
	);
}
