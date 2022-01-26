import React, { useState, useEffect } from 'react';
function Support() {
	const [ scrollValue, setScrollValue ] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollValue(position);
	};
	return (
		<section className="supportWrap">
			<div className="infoWrap">
				<div className="info">
					<h1 className="support-h">Support Us</h1>
					<p className="support-p">
						At the Shaheed Junaid Jamshed Academy of Quranic Sciences, we receive numerous requests for
						financial contributions to support our work. Simultaneously, we also encourage creditworthy
						members of the Ummah to come forward and give towards a variety of causes including financially
						supporting widows, orphans, the elderly, etc. These contributions also help us arrange
						enlightening seminars and workshops around important Islamic events and topics such as Muharram,
						fasting and the month of Ramadan, performing Hajj, etc. and are used to fulfil pending fees and
						dues of needy students. Our worldwide Online programs are being conducted free of cost and
						Onsite classes have nominal charges, so this financial support is utilized to ensure smooth
						running of all events and Academy related activites.
					</p>
				</div>
				<div className="infoImg">
					<img src="./images/donation.png" className="sup-img" />
				</div>
			</div>
			<div className="bankCardWrap">
				<p className="center">
					For any kind of atiyaats, sadaqaats, zakat disbursement to needy individuals, please send your
					contributions to the following account.
				</p>
				<div className="bankCard">
					<h1 className="bank-h">Bank Information</h1>
					<h2 className="bank-h2">Account Title</h2>
					<p className="bank-p">Shaheed Junaid Jamshed Academy of Quranic Studies</p>
					<h2 className="bank-h2">Account Number</h2>
					<p className="bank-p">6026820301714138513</p>
					<h2 className="bank-h2">IBAN</h2>
					<p className="bank-p">PK74MPBL0268067140138513</p>
					<h2 className="bank-h2">Bank Name</h2>
					<p className="bank-p">Habib Metropolitan Bank</p>
					<h2 className="bank-h2">Branch Name</h2>
					<p className="bank-p">I - 10 Islamabad</p>
					<h2 className="bank-h2">Note</h2>
					<p className="bank-p">
						Please inform on
						<a className="p-link" href="tel:+923455100891">
							+92-345-5100891 (whatsapp only)
						</a>
						or email @
						<a className="p-link" href="mailto:junaidjamshedacademy@gmail.com">
							junaidjamshedacademy@gmail.com
						</a>
						after making the donation.
					</p>
				</div>
				<img src="./images/bank.png" className="bank-img" />
			</div>
			<div className={scrollValue > 100 ? 'scrollVisible' : 'scrollHide'}>
				<a href="#top" className="animate">
					<img src="./images/scroll-up.png" alt="scroll back" className="scroll-img" />
				</a>
			</div>
			<div className="elfsight-app-50f6761c-37e0-41cb-bd28-e0b374a61c53" />
		</section>
	);
}

export default Support;
