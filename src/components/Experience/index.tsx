import {
	ExperienceContainer,
	TableExperienceContainer,
} from "@/styles/components/Experience";

export default function Experience() {
	return (
		<ExperienceContainer id="experience" className="anchor">
			<h2>My experience</h2>
			<TableExperienceContainer>
				<div className="title">
					Experience 1 (Trainee Internship at Compasso UOL):
				</div>
				<div className="table">
					<div className="row">
						<p>• May 2021 to August 2021.</p>
						<p>
							• 3-month internship developing a movie platform inspired by
							Netflix.
						</p>

						<p>
							• Project built using React.js with tools such as Redux, Axios,
							and Styled-Components.
						</p>
					</div>
				</div>
			</TableExperienceContainer>
			<TableExperienceContainer>
				<div className="title">
					Experience 2 (Junior React.js Developer at Compasso UOL):
				</div>
				<div className="table">
					<div className="row">
						<p>• August 2021 to March 2022.</p>

						<p>
							• Worked with React Native supporting and evolving a retail
							client’s mobile app.
						</p>
						<p>
							• Technologies used: Redux, Styled-Components, Axios, and Testing
							Library.
						</p>
						<p>
							• Responsible for bug fixing, implementing new screens, and adding
							new features.
						</p>
					</div>
				</div>
			</TableExperienceContainer>
			<TableExperienceContainer>
				<div className="title">
					Experience 3 (Frontend Software Developer at Ioasys):
				</div>
				<div className="table">
					<div className="row">
						<p>• March 2022 to Present.</p>
						<p>• Web development with React.js for a B2B logistics client.</p>
						<p>
							• Implemented features, complex forms, charts, and interactive
							reports.
						</p>
						<p>
							• Worked with modern technologies such as Next.js, Vite, and
							Tailwind CSS.
						</p>
						<p>
							• Collaborated in Agile teams with continuous delivery, code
							reviews, and REST API integration.
						</p>
					</div>
				</div>
			</TableExperienceContainer>
		</ExperienceContainer>
	);
}
