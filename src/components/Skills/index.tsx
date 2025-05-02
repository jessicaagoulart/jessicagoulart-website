import { SkillsContainer } from "@/styles/pages";
import Carousel from "../Carousel";

export default function Skills() {
	return (
		<SkillsContainer id="skills" className="anchor">
			<h2>My skills</h2>

			<Carousel />
		</SkillsContainer>
	);
}
