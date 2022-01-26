import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SlideOne from '../components/subComponents/slideOne';
import Offline from '../components/offline';
import Online from '../components/online';
function Courses() {
	const [ scrollValue, setScrollValue ] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollValue(position);
	};
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
			<div className={scrollValue > 100 ? 'scrollVisible' : 'scrollHide'}>
				<a href="#top" className="animate">
					<img src="./images/scroll-up.png" alt="scroll back" className="scroll-img" />
				</a>
			</div>
			<div className="elfsight-app-50f6761c-37e0-41cb-bd28-e0b374a61c53" />
		</div>
	);
}

export default Courses;
