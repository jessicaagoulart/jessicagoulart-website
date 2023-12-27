import React from "react";
import { ContactContainer } from "@/styles/components/Contact";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
				<textarea name="message" onChange={(e) => setMessage(e.target.value)} />

				<button type="submit" disabled={!email || !message || !name}>
					Enviar
				</button>
			</form>
		</ContactContainer>
	);
}
