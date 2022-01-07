import React, { useEffect } from 'react';
import Head from 'next/head';
import Slide from '../components/slider';
import AboutUs from '../components/about';
import Team from '../components/team';
import ContactComp from '../components/contact';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Shaheed Junaid Jamshed Academy of Quranic Sciences</title>
				<meta
					name="description"
					content="Shaheed Junaid Jamshed Academy of Quranic Sciences was established by Muniza Javed (Sister of Shaheed Junaid Jamshed RA.) in July 2018 and is affiliated with the Wifaq ul Madaris Al-Arabia,Multan (Pakistan), headed by Shaykh ul-Hadith Mufti Muhammad Taqi Usmani DB. Imminent scholar such as Maulana Muhammad Hanif Jalandhari DB is also present on the Wifaq’s Advisory Board"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
			</Head>
			<Slide />
			<AboutUs home={true} />
			<Team />
			<ContactComp />
		</div>
	);
}
