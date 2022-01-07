import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router';
function Navbar() {
	const router = useRouter();
	const [ isOpen, setIsOpen ] = useState(false);
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className={scrollPosition > 68 ? 'navbarWrap posFixed' : 'navbarWrap'}>
			{/* <div className="logoWrap"> */}
			{/* <p>
					<span>Shaheed Junaid Jamshed Academy</span> of Quranic Sciences
				</p> */}
			{/* <img className="logo" onClick={() => router.push('/')} src="./images/jj-logo.jpeg" /> */}
			{/* </div> */}
			<div className="linksWrap">
				<h1 onClick={() => toggleDrawer()}>&#9776;</h1>
				{/* <ul className="allLinks">
					<li className="links" onClick={() => router.push('/')}>
						Home
					</li>
					<li className="links">Courses</li>
					<li className="links" onClick={() => router.push('/aboutus')}>
						About Us
					</li>
					<li className="links" onClick={() => router.push('/faqs')}>
						FAQs
					</li>
				</ul>
				<div className="btnWrap">
					<button className="contact" onClick={() => router.push('/login')}>
						Login
					</button>
					<button className="contact" onClick={() => router.push('/contact')}>
						Contact Us
					</button>
				</div> */}
			</div>
			<Drawer className="drawer-cus" open={isOpen} onClose={() => toggleDrawer()}>
				<div className="closeWrap">
					<img src="./images/close.png" onClick={() => toggleDrawer()} />
				</div>
				<div className="logoCus">
					<img className="logo" src="./images/jj-logo.jpeg" />
				</div>
				<ul className="allLinks">
					<li
						className="links"
						onClick={() => {
							router.push('/');
							toggleDrawer();
						}}
					>
						Home
					</li>
					<li className="links">Courses</li>
					<li
						className="links"
						onClick={() => {
							router.push('/aboutus');
							toggleDrawer();
						}}
					>
						About Us
					</li>
					<li
						className="links"
						onClick={() => {
							router.push('/faqs');
							toggleDrawer();
						}}
					>
						FAQs
					</li>
				</ul>
				<div className="btnWrap">
					<button
						className="contact"
						onClick={() => {
							router.push('/login');
							toggleDrawer();
						}}
					>
						Login
					</button>
					<button
						className="contact"
						onClick={() => {
							router.push('/contact');
							toggleDrawer();
						}}
					>
						Contact Us
					</button>
				</div>
			</Drawer>
		</nav>
	);
}

export default Navbar;
