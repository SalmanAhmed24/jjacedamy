import React, { useState, useEffect } from 'react';
import SlideOne from './subComponents/slideOne';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import EventSlider from './subComponents/eventSlider';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/router';

function AllEventsSlider() {
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const [ eventData, setEventData ] = useState();
	const [ loaderFlag, setLoaderFlag ] = useState(false);
	const router = useRouter();
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};
	useEffect(() => {
		setLoaderFlag(true);
		axios
			.get('https://jj-backend-app.herokuapp.com/api/allEvents')
			.then((res) => {
				console.log('@@@--->', res.data);
				setEventData(res.data);
				setLoaderFlag(false);
			})
			.catch((err) => {
				setLoaderFlag(false);
			});
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="mainSliderWrap">
			{loaderFlag ? (
				<Box sx={{ width: '100%' }}>
					<LinearProgress />
				</Box>
			) : (
				<Carousel autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false}>
					{eventData && eventData.length ? (
						eventData.map((i) => {
							return <EventSlider key={i._id} event={i} />;
						})
					) : null}
					{/* <SlideOne /> */}
				</Carousel>
			)}
		</div>
	);
}

export default AllEventsSlider;
