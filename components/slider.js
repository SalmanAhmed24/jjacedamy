import React, { useState, useEffect } from 'react';
import SlideOne from './subComponents/slideOne';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import EventSlider from './subComponents/eventSlider';

function Slide() {
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const [ eventData, setEventData ] = useState();
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};
	useEffect(() => {
		axios
			.get('https://jj-backend-app.herokuapp.com/api/allEvents')
			.then((res) => {
				setEventData(res.data);
			})
			.catch((err) => console.log(err));
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className="mainSliderWrap">
			<Carousel autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false}>
				<SlideOne />
				{eventData && eventData.length ? (
					eventData.map((i) => {
						return <EventSlider key={i._id} event={i} />;
					})
				) : null}
				{/* <SlideOne /> */}
			</Carousel>
		</div>
	);
}

export default Slide;
