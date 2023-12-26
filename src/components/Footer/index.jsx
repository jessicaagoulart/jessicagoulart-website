import Link from "next/link";
import { FooterContainer, IconsContainer } from "@/styles/components/Footer";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Subtitle } from "@/styles/components/Navbar";

export default function Footer() {
	return (
		<FooterContainer>
			<IconsContainer>
				<Link
					href="https://www.linkedin.com/in/jessicaagoulart/"
					target="_blank"
				>
					<FaLinkedin />
				</Link>
				<Link href="https://github.com/jessicaagoulart" target="_blank">
					<FaGithubSquare />
				</Link>
			</IconsContainer>
			<Subtitle>Feito com ❤ por Jéssica Goulart</Subtitle>
		</FooterContainer>
	);
}
