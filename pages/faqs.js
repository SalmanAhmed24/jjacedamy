import React from 'react';
import FaqAccordion from '../components/accordion';
function Faqs() {
	return (
		<div className="faqsWrap">
			<div className="bannerWrap">
				<div className="faqHeadInfo">
					<h1 className="faqs-h">FAQs</h1>
					<p className="faqs-p">We have some frequently asked questions listed below.</p>
				</div>
				<div className="img-faqsWrap">
					<img src="./images/faqs.png" alt="?" className="faq-img" />
				</div>
			</div>
			<div className="accordionWrap">
				<FaqAccordion />
			</div>
		</div>
	);
}

export default Faqs;
