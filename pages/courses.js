import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SlideOne from '../components/subComponents/slideOne';
import Offline from '../components/offline';
import Online from '../components/online';
function Courses() {
	return (
		<div className="coursesWrap">
			<SlideOne />
			<div className="innerWrap">
				<Tabs>
					<TabList>
						<Tab>Online Courses</Tab>
						<Tab>On-site Courses</Tab>
					</TabList>

					<TabPanel>
						<Online />
					</TabPanel>
					<TabPanel>
						<Offline />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
}

export default Courses;
