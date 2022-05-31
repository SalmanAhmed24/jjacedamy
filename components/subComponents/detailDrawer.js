import Drawer from '@mui/material/Drawer';
import React, { useState, useEffect } from 'react';
function EventDetails({ drawerFlag, toggleDrawer, event }) {
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
		<Drawer className="eventDrawer" anchor={'right'} open={drawerFlag} onClose={toggleDrawer}>
			<div className="innerDrawer">
				<p className="close" onClick={toggleDrawer}>
					x
				</p>
				<img src={`data:${event.file.mimetype};base64,${event.file.data}`} alt="Image here" />
				<p>
					Title: <strong>{event.title}</strong>
				</p>
				<p>
					Date: <strong>{event.date}</strong>
				</p>
				<p>
					Start Time: <strong>{tConvert(event.startTime)}</strong>
				</p>
				<p>
					End Time: <strong>{tConvert(event.endTime)}</strong>
				</p>
				<p>
					Speaker: <strong>{event.speaker}</strong>
				</p>
				<p>
					Address: <strong>{event.address}</strong>
				</p>
				<p>
					Phone: <strong>{event.phone}</strong>
				</p>
			</div>
		</Drawer>
	);
}
export default EventDetails;
