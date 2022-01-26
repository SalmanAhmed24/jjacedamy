import React, { useEffect, useState } from 'react';
import FaqAccordion from '../components/accordion';
function Faqs() {
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
		<div className="faqsWrap">
			<div className="bannerWrap">
				<div className="faqHeadInfo">
					<h1 className="faqs-h">FAQs</h1>
					<p className="faqs-p">Following are some of the frequently asked questions.</p>
				</div>
				<div className="img-faqsWrap">
					<img src="./images/faqs.png" alt="?" className="faq-img" />
				</div>
			</div>
			<div className="accordionWrap">
				<FaqAccordion />
			</div>
			<div className={scrollValue > 100 ? 'scrollVisible' : 'scrollHide'}>
				<a href="#top" className="animate">
					<img src="./images/scroll-up.png" alt="scroll back" className="scroll-img" />
				</a>
			</div>
			<div className="elfsight-app-50f6761c-37e0-41cb-bd28-e0b374a61c53" />
		</div>
	);
}

export default Faqs;
