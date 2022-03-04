import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/router';
import AOS from 'aos';

function TestimonialSlider() {
	useEffect(() => {
		AOS.init();
	}, []);
	const router = useRouter();
	const test = [
		{
			mainHeading: 'SAIRA ZAFIR - CALIFORNIA',
			subHeading: 'The Journey of Learning Continues',
			description:
				'On August 14th, 2019, under the supervision of teacher Muniza, my friend Tehseen and I were among the lucky pioneers to establish the Junaid Jamshed Academy in Sacramento California. We started this journey with just fifty women. For women like us who have been living abroad for many decades, that day became a very special day in our lives.'
		},
		{
			mainHeading: 'AMINA J. USAMA - GERMANY',
			subHeading: '',
			description:
				'I stumbled upon Junaid Jamshed Academy in 2020 when their online courses began and since then, my willingness to become a better Muslim has only been growing. The list of courses offered here have given me so much knowledge about Islam and made me fall in love with my own religion so much more.'
		},
		{
			mainHeading: 'SARAH WASEEM - BERLIN',
			subHeading: 'How I became a part of JJ Academy',
			description:
				'It was back in the summer of 2018, I had just recently graduated and was looking forward to spending some time relaxing before I went for my post-grad. Back then, I would think of myself as somewhat religious because I had been covering my head since I was 10 years old and also did my obligatory prayers, but that was just about it. Little did I know, a lot more was required from me by Allahﷻ to be a good muslim.'
		},
		{
			mainHeading: 'WAJEEHA IRFAN - HOUSTON',
			subHeading:
				'The Junaid Jamshed Academy not only effectively educates but also provides a very interactive platform to connect with others and share experiences and ideas.',
			description:
				'I am Wajeeha, a 17 years old Pakistani girl from the United States of America. Living in a non-Muslim country often times makes practicing Islam more challenging. Although in America, we have the constitution that supports the freedom of religion and expression, it is not as hard as in many European countries where there are strict laws passed against Islam i.e. Hijab ban, etc. Alhamdulillah.'
		},
		{
			mainHeading: 'AYESHA HAROON - ISLAMABAD',
			subHeading: '',
			description:
				"I had been hearing about Junaid Jamshed's sister teaching somewhere and I wanted to be in her presence but I didn't know where to find her. A while passed when I was at a friend's gathering and someone told me about the Junaid Jamshed Academy. I knew it was my calling."
		},
		{
			mainHeading: 'SHAZIA KHURRAM - KARACHI',
			subHeading: '',
			description:
				"My name is Shazia Khurram and I work for Meezan Bank. I started to attend Muniza Apa's Tafseer class in 2020. The classes brought a new perspective to my life. I look forward to the classes every week. I now understand the Quran better and understand why a particular ayat was revealed"
		}
	];
	return (
		<div
			className="test-wrap"
			data-aos="fade-up"
			data-aos-offset="250"
			data-aos-delay="50"
			data-aos-duration="2000"
			data-aos-easing="ease-in-out"
		>
			<h2 className="testimonial-heading">Testimonials</h2>
			<Carousel
				className="carousel-slider"
				autoPlay={true}
				infiniteLoop={true}
				interval={5000}
				showStatus={false}
				showThumbs={false}
			>
				{test.map((i) => {
					return (
						<div key={i.mainHeading} className="sliderSingleItem">
							<h3 className="test-h">{i.mainHeading}</h3>
							<p className="test-span">{i.subHeading}</p>
							<p className="desc-p">{i.description}</p>
							<span onClick={() => router.push('/testimonials')}>Read more</span>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default TestimonialSlider;
