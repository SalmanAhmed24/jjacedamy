import React, { useState, useEffect } from 'react';
function Online() {
	return (
		<div className="onlineMain">
			<div className="onlineWrap">
				<p>
					Junaid Jamshed Academy of Quraanic Sciences Online&apos;s courses are based on the Qur&apos;an and
					Sunnah, and draw upon the rich scholarly tradition of Islamic civilization with a respect for all
					scholars of the Ahl al-Sunnah wal-Jama&apos;ah. To date, our courses have been attended by thousands
					of women from dozens of countries all around the world
				</p>
				<p>
					Learn anywhere in the world at your convinience You can be anywhere in the world and attend these
					classes.Attend classes live or listen to the class recording at a convenient time. Online learning
					with Junaid Jamshed Academy allows busy women and girls who are eager to get basic understanding of
					Deen in their lives at any time that is convenient for them.
				</p>
				<h3 className="course-new-h">Online Tafseer, Hadith, Seerah, Fiqh, Grammar Registration link</h3>
				<a className="course-register" href="https://forms.gle/ouxduEXyfMCbVD8x8" rel="noreferrer">
					Register
				</a>
				<h3 className="course-new-h">Kindergarten class Registration link</h3>
				<a className="course-register" href="https://forms.gle/quL52MjGxu4dXrPr7" rel="noreferrer">
					Register
				</a>
				<h3 className="course-new-h">Tajweed link</h3>
				<a className="course-register" href="https://forms.gle/4Lzn79uqB7hmAy3D6" rel="noreferrer">
					Register
				</a>
			</div>
			<img src="./images/quran-bg.png" alt="quran" className="img-pos-abs" />
		</div>
	);
}

export default Online;
