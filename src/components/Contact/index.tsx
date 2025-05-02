import React, { useRef, useState } from "react";
import { ContactContainer } from "@/styles/components/Contact";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const templateParams = {
			from_name: name,
			email,
			message,
		};

		try {
			emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID
			);

			alert("Message sent successfully!");
			setName("");
			setEmail("");
			setMessage("");
			formRef.current?.reset();
		} catch (error) {
			console.error("Send error:", error);
			alert("An error occurred while sending your message. Please try again.");
		}
	};

	return (
		<ContactContainer id="contact">
			<h2>Contact</h2>
			<h3>
				Interested in working together? Get in touch using the form below!
			</h3>

			<form ref={formRef} onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					required
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>

				<button type="submit" disabled={!name || !email || !message}>
					Send
				</button>
			</form>
		</ContactContainer>
	);
}
