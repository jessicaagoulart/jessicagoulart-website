import { NavbarContainer, Wrapper } from "@/styles/components/Navbar";
import Link from "next/link";

export default function Navbar() {
	return (
		<Wrapper>
			<NavbarContainer className="navbar-container">
				<li>
					<Link className="link" href="#start">
						Início
					</Link>
				</li>
				<li>
					<Link className="link" href="#about">
						Sobre
					</Link>
				</li>
				<li>
					<Link className="link" href="#experience">
						Experiência
					</Link>
				</li>
				<li>
					<Link className="link" href="#skills">
						Skills
					</Link>
				</li>
				<li>
					<Link className="link" href="#contact">
						Contato
					</Link>
				</li>
			</NavbarContainer>
		</Wrapper>
	);
}
