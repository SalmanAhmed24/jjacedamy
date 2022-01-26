import React, { useEffect } from 'react';
import Head from 'next/head';
import Slide from '../components/slider';
import AboutUs from '../components/about';
import Team from '../components/team';
import ContactComp from '../components/contact';
import Script from 'next/script';
export default function Home() {
	return (
		<div>
			<Head>
				<title>Shaheed Junaid Jamshed Academy of Quranic Sciences</title>
				<meta
					name="description"
					content="Shaheed Junaid Jamshed Academy of Quranic Sciences was established by Muniza Javed (Sister of Shaheed Junaid Jamshed RA.) in July 2018 and is affiliated with the Wifaq ul Madaris Al-Arabia,Multan (Pakistan), headed by Shaykh ul-Hadith Mufti Muhammad Taqi Usmani DB. Imminent scholar such as Maulana Muhammad Hanif Jalandhari DB is also present on the Wifaq’s Advisory Board"
				/>
				<link rel="shortcut icon" href="./logo.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
			</Head>
			<Script
				id="gtag"
				strategy="lazyOnload"
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-QCC4095N8J"
			/>
			<Script id="gtag-code">
				{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QCC4095N8J');
				`}
			</Script>
			<div className="cus-pad">
				<Slide />
			</div>
			<AboutUs home={true} />
			<Team />
			<ContactComp />
			<Script strategy="lazyOnload" src="https://apps.elfsight.com/p/platform.js" defer />
			<div className="elfsight-app-50f6761c-37e0-41cb-bd28-e0b374a61c53" />
		</div>
	);
}
