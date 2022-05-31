import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EventDetails from '../components/subComponents/detailDrawer';
import AllEventsSlider from '../components/allEventsSlider';
function Events() {
	const router = useRouter();
	const [ allEvents, setEvents ] = useState([]);
	const [ loader, setLoaderFlag ] = useState(false);
	const [ drawerFlag, setDrawerFlag ] = useState(false);
	const [ itemId, setItemId ] = useState();
	useState(() => {
		setLoaderFlag(true);
		axios
			.get(`https://jj-backend-app.herokuapp.com/api/allEvents`)
			.then((res) => {
				setEvents(res.data);
				console.log(res.data);
				setLoaderFlag(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const goToDetails = (id) => {
		setItemId(id);
		toggleDrawer();
	};
	const toggleDrawer = () => {
		setDrawerFlag(!drawerFlag);
	};
	return (
		<div className="eventMain">
			<AllEventsSlider />
			<div className="eventsCardWrap">
				{loader ? (
					<p>Loading...</p>
				) : (
					allEvents.map((i) => {
						return (
							<div className="card" key={i._id}>
								<img src={`data:${i.mobileImg.mimetype};base64,${i.mobileImg.data}`} alt="Image here" />
								<div className="blackOverlay">
									<h2>{i.title}</h2>
									<p>{i.date}</p>
									<p>{i.address}</p>
									<button className="detBtn" onClick={() => goToDetails(i._id)}>
										Details
									</button>
								</div>
								{i._id == itemId && drawerFlag ? (
									<EventDetails drawerFlag={drawerFlag} toggleDrawer={toggleDrawer} event={i} />
								) : null}
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default Events;
