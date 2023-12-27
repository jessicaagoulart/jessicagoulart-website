import React from "react";

import { Divider, Wrapper, FloatingButton } from "@/styles/pages";

import Experience from "@/components/Experience";
import Initial from "@/components/Initial";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
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

			<Initial />
			<Divider />

			<About />
			<Divider />

			<Experience />
			<Divider />

			<Skills />
			<Divider />

			<Contact />
		</Wrapper>
	);
}
