import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';

function EventSlider({ event }) {
	const [ innerWidth, setInnerWidth ] = useState(1200);
	useEffect(
		() => {
			if (typeof window !== undefined) {
				console.log(window.innerWidth);
				setInnerWidth(window.innerWidth);
			}
		},
		[ innerWidth ]
	);
	console.log('innerWidth', innerWidth);
	const router = useRouter();
	const openEventModule = () => {
		console.log('clicked');
		router.push('events');
	};
	return (
		<div onClick={openEventModule} className="eventSlider1Wrap">
			{innerWidth > 567 ? (
				<img src={`data:${event.file.mimetype};base64,${event.file.data}`} />
			) : (
				<img className="mobileImg" src={`data:${event.mobileImg.mimetype};base64,${event.mobileImg.data}`} />
			)}
		</div>
	);
}

export default EventSlider;
