import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from "../assets/raposa.png";
import Image from "next/image";

import { Container, Header, Main } from "@/styles/pages/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Header>
				<Link href="/">
					<div className="logo">JG</div>
				</Link>

				<Navbar />
			</Header>

			<Main>
				<Component {...pageProps} />
			</Main>

			<Footer />
		</Container>
	);
}
