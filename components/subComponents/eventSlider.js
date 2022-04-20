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
		<div className="slider1Wrap">
			<div className="eventWrap">
				<h1 className="event-h">{event.title}</h1>
				<p className="courses-p">
					Speaker: <span>{event.speaker}</span>
				</p>
				<p className="courses-p">
					Start Time:{' '}
					<span className="startTime">
						<span>{tConvert(event.startTime)}</span>
					</span>
				</p>
				<p className="courses-p">
					Ends Time: <span className="startTime">{tConvert(event.endTime)}</span>
				</p>
				<p className="courses-p">
					Date: <span>{tConvert(event.date)}</span>
				</p>
				{/* <div className="btn-enrol-wrap">
					<button className="btn-enrol" onClick={() => router.push('/courses')}>
						Enroll Now
					</button>
				</div> */}
			</div>
			<div className="eventCardWrap">
				<img className="eventImage" src={`data:image/png;base64,${event.file.data}`} className="sliderImg" />
			</div>
		</div>
	);
}

export default EventSlider;
