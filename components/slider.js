import React, { useState, useEffect } from 'react';
import SlideOne from './subComponents/slideOne';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slide() {
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
	return (
		<div>
			{/* <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false}> */}
			<SlideOne />
			{/* <SlideOne /> */}
			{/* </Carousel> */}
		</div>
	);
}

export default Slide;
