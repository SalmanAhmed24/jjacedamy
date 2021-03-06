import React, { useEffect } from 'react';
import AOS from 'aos';
function ContactComp() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="contactWrap">
			<h1
				className="contact-h"
				data-aos="fade-up"
				data-aos-offset="100"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
			>
				Contact Us
			</h1>
			<div className="contact-cardWrap">
				<div className="planeWrap">
					<img src="./images/plane.png" className="plane" alt="--->" />
				</div>
				<div
					className="contact-card"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<h1>Islamabad Campus</h1>
					<div className="card-links">
						<img src="./images/mail.png" className="icons" />
						<a href="mailto:junaidjamshedacademy@gmail.com">junaidjamshedacademy@gmail.com</a>
					</div>
					<div className="card-links">
						<img src="./images/phone.png" className="icons" />
						<a href="tel:+923055463000">03055463000</a>
						<span className="comma">/</span>
						<a href="tel:+923213999294">03213999294</a>
					</div>
					<div className="card-links">
						<img src="./images/address.png" className="icons" />
						<p>House 598, Street 30, G-10/2, Islamabad</p>
					</div>
				</div>
				<div
					className="contact-card"
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<h1>Bahria Campus Rawalpindi </h1>
					<div className="card-links">
						<img src="./images/mail.png" className="icons" />
						<a href="mailto:junaidjamshedacademy@gmail.com">junaidjamshedacademy@gmail.com</a>
					</div>
					<div className="card-links">
						<img src="./images/phone.png" className="icons" />
						<a href="tel:+923245023783">03245023783</a>
					</div>
					<div className="card-links">
						<img src="./images/address.png" className="icons" />
						<p>House 1253, Road B, Main Southeast Boulevard, Bahria Town, Phase 4, Rawalpindi </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactComp;
