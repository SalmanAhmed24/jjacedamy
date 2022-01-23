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
						<Tab>Onsite Courses</Tab>
					</TabList>

					<TabPanel>
						<Online />
					</TabPanel>
					<TabPanel>
						<Offline />
					</TabPanel>
				</Tabs>
			</div>
			<div className="elfsight-app-50f6761c-37e0-41cb-bd28-e0b374a61c53" />
		</div>
	);
}

export default Courses;
