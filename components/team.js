import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Modal from 'react-modal';
function Team() {
	const [ modalIsOpen, setModalIsOpen ] = useState(false);
	const [ details, setDetails ] = useState('');
	useEffect(() => {
		AOS.init();
	}, []);
	const openModal = () => {
		setModalIsOpen(!modalIsOpen);
	};
	const customStyles = {
		content: {
			width: '50%',
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)'
		}
	};
	const members = [
		{
			name: 'Muniza Jamshed',
			designation: 'Founder & Senior Faculty Member ',
			details:
				'Founder and Senior Faculty Member, sister of Shaheed Junaid Jamshed. She founded this Academy under his name three years ago and serves both as an administrator and teacher. She teaches Tafseer and Arabic Grammar online and Oncampus.'
		},
		{
			name: 'Seema Iftikhar',
			designation: 'Senior Faculty Member',
			details:
				'Senior Faculty Member – She has done the Masturaat Course from Madrasa Ayesha Siddiqa (RA) as well as the Tajweed and Masadar-e-Shariah courses. She has taught at the Madrasa Ayesha Siddiqa (RA) for 13 years before becoming a faculty member at the Shaheed Junaid Jamshed Academy of Quranic Sciences three years ago. She now teaches Seerah and Hayat ul Muslimeen Oncampus and Online.'
		},
		{
			name: 'Sumaiya Kakakhel',
			designation: 'Senior Faculty Member',
			details:
				'Hamshira Mufti Adnan Kakakhel is BA in Arabic and Islamic Studies from Punjab University. 3 years Aalimah course from Madrassa Aisha Siddeqa. Joined Junaid Jamshed Academy three years ago and has been teaching Hadith Shareef till date.'
		},
		{
			name: 'Samina Sanaullah',
			designation: 'Senior Faculty Member',
			details:
				'Senior Faculty Member – She has a Masters in Arabic from the Punjab University, Lahore and has done the six year Aalimah course from Wifaq ul Madaris. She has been a faculty member at the Shaheed Junaid Jamshed Academy of Quranic Sciences since its inception, teaching Arabic Grammar, Qisas, Seerah, and Tafseer.'
		},
		{
			name: 'Najam un Nisa',
			designation: 'Senior Faculty Member',
			details:
				'Senior Faculty Member – She has done her MSc Anthropology from Quaid-e-Azam University and completed Daura-e-Hadith Aalimah from Wafaq ul Madaris. Currently, she is studying Takhassus-fil-Fikh lil-Aalimat from Markaz al-Faisal lil-Dirasat il-Islamia. For eight years, she has been teaching different subjects at various madrassas in Islamabad as well as invigilating exams at Wafaq ul Madaris for four consecutive years. For the past three years, since the start of the Shaheed Junaid Jamshed Academy of Quranic Sciences, she has been a faculty member here and is now teaching first year and second year Aalimah courses.'
		},
		{
			name: 'Muzaina Abu Bakar',
			designation: 'Senior Faculty Member',
			details:
				'Senior Faculty Member – She has done the Dars-e-Nizami course from Darul Uloom Karachi and has been teaching at the Shaheed Junaid Jamshed Academy of Quranic Sciences for the last three years.'
		}
	];
	return (
		<div
			className="teamWrap"
			data-aos="fade-up"
			data-aos-offset="250"
			data-aos-delay="50"
			data-aos-duration="2000"
			data-aos-easing="ease-in-out"
		>
			<div className="heading">
				<h1 className="team-h">Team</h1>
			</div>
			<div className="membersWrap">
				{members.map((i) => {
					return (
						<div
							onClick={() => {
								openModal();
								setDetails(i.details);
							}}
							key={i.name}
							className="membersCard"
						>
							<h1 className="memberHead">{i.name}</h1>
							<p className="member-p">{i.designation}</p>
						</div>
					);
				})}
			</div>
			<Modal style={customStyles} isOpen={modalIsOpen} contentLabel="Details">
				<p className="modalClose" onClick={() => openModal()}>
					x
				</p>
				<p className="innerModal">{details}</p>
			</Modal>
		</div>
	);
}

export default Team;
