import React, { useState, useEffect } from 'react';
import moment from 'moment';
function EventSlider({ event }) {
	function tConvert(time) {
		// Check correct time format and split into components
		time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [ time ];

		if (time.length > 1) {
			// If time format correct
			time = time.slice(1); // Remove full string match value
			time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
			time[0] = +time[0] % 12 || 12; // Adjust hours
		}
		return time.join(''); // return adjusted time or original string
	}
	return (
		<div className="eventSlider1Wrap">
			<div className="backDrop" />
			<div className="eventWrap">
				<h1 className="event-h">{event.title}</h1>
				<div className="mainEventInfoWrap">
					<div className="event-info-wrap">
						<img src="../../images/speaker.png" alt="Speaker:" />
						<span>{event.speaker}</span>
					</div>
					<div className="event-info-wrap">
						<img src="../../images/planner.png" alt="Date:" />
						<span>{event.date}</span>
					</div>
					<div className="event-info-wrap">
						<img src="../../images/clock.svg" alt="Start Time:" />
						<span>
							{tConvert(event.startTime)} - {tConvert(event.endTime)}
						</span>
					</div>
					<div className="event-info-wrap">
						<img src="../../images/address2.png" alt="Address:" />
						<span>{event.address}</span>
					</div>
				</div>
				<div className="btn-enrol-wrap">
					<button className="btn-enrol" onClick={() => router.push('/courses')}>
						View Event
					</button>
				</div>
			</div>
		</div>
	);
}

export default EventSlider;
