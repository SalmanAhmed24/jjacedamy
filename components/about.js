import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { useRouter } from 'next/router';
function AboutUs({ home }) {
	useEffect(() => {
		AOS.init();
	}, []);
	const router = useRouter();
	return (
		<div className="aboutUs-Wrap">
			<div
				className={'infoWrap'}
				data-aos="fade-right"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
			>
				<div className="headingWrap">
					<h1 className={'about-h'}>About Us</h1>
				</div>
				<p className="about-p">
					Shaheed Junaid Jamshed Academy of Quranic Sciences was established by Muniza Javed (Sister of
					Shaheed Junaid Jamshed RA.) in July 2018 and is affiliated with the Wifaq ul Madaris
					Al-Arabia,Multan (Pakistan), headed by Shaykh ul-Hadith Mufti Muhammad Taqi Usmani DB. Imminent
					scholar such as Maulana Muhammad Hanif Jalandhari DB is also present on the Wifaq’s Advisory Board.
				</p>
				{home ? (
					<div className="btn-about-wrap">
						<button onClick={() => router.push('/aboutus')}>Details</button>
					</div>
				) : null}
			</div>
			{home ? (
				<div
					className="pictureWrap"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<img className="illustration" src="./images/quran-bg.png" />
				</div>
			) : (
				<div
					className="pictureWrap"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<div className="imgQuran">
						<div className="overlay" />
					</div>
				</div>
			)}
		</div>
	);
}

export default AboutUs;
