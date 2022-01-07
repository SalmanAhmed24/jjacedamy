import React, { useState, useEffect } from 'react';
function SlideOne() {
	return (
		<div className="slider1Wrap">
			<div className="contentWrap">
				<h1 className="our-h">Our</h1>
				<h1 className="courses-h">Courses</h1>
				<p className="courses-p">
					We offer both onsite as well as Offsite courses for students all around Pakistan
				</p>
				<div className="btn-enrol-wrap">
					<button className="btn-enrol">Enroll Now</button>
				</div>
			</div>
			<div className="courseCardWrap">
				<div className="cardCourse">
					<h1 className="cardCourse-h">Onsite Courses</h1>
					<ul className="coursesList">
						<li className="coursesItem">Dirasaat-e-Deeniya</li>
						<li className="coursesItem">Six-Year Aalimah Course</li>
						<li className="coursesItem">Tajweed</li>
					</ul>
					<p className="course-p">
						timings in our workday which is 9:00 am to 5:00 pm, from Monday to Friday.
					</p>
					<div className="viewBtn-wrap">
						<button className="viewCourse">View Details</button>
					</div>
				</div>
				<div className="cardCourse">
					<h1 className="cardCourse-h">Offsite Courses</h1>
					<ul className="coursesList">
						<li className="coursesItem">Tajweed</li>
						<li className="coursesItem">Fiqh</li>
						<li className="coursesItem">Tafseer al-Quran</li>
						<li className="coursesItem">Hadith</li>
						<li className="coursesItem">Seerah</li>
						<li className="coursesItem">Arabic Grammar</li>
						<li className="coursesItem">Hayat ul-Muslimeen</li>
					</ul>
					<div className="viewBtn-wrap">
						<button className="viewCourse">View Details</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SlideOne;
