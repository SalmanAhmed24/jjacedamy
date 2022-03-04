import React, { useState, useEffect } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from 'react-accessible-accordion';
function Testimonials() {
	return (
		<div className="galleryWrap">
			<h1 className="gallery-h">Testimonials</h1>
			<div className="testimonialsWrap">
				<Accordion allowZeroExpanded={true}>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								SAIRA ZAFIR - CALIFORNIA (The Journey of Learning Continues)
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								On August 14th, 2019, under the supervision of teacher Muniza, my friend Tehseen and I
								were among the lucky pioneers to establish the Junaid Jamshed Academy in Sacramento
								California. We started this journey with just fifty women. For women like us who have
								been living abroad for many decades, that day became a very special day in our lives.
								This is the women&apos;s exclusive JJ Academy abroad for international students
								Masha&apos;Allah! In less than three years, the number of students has tripled
								Alhamdulillah! In JJ Academy of California, Duas, Hadith, and live zoom classes on
								Tafseer and Tajweed are available to revive and groom the spirituality among students of
								the Academy. The curriculum that the Academy offers is the source which has refined our
								vision about the significance of the Akhirah and to live a purposeful life. Our dear
								teacher Muniza and her team make a lot of effort and do hard work globally for the
								success of the Academy. May Allah assist them in continuing this effort. Ameen.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>AMINA J. USAMA - GERMANY</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I stumbled upon Junaid Jamshed Academy in 2020 when their online courses began and since
								then, my willingness to become a better Muslim has only been growing. The list of
								courses offered here have given me so much knowledge about Islam and made me fall in
								love with my own religion so much more. The attributes of our beloved Prophet (SAW) are
								taught in a way that you immediately want to follow all the Sunnahs. The brave stories
								of Sahabas only make your Imaan grow. And the beauty of the Tafseer class makes you feel
								like even though you&apos;re far away from your teacher and classmates, you are still
								surrounded by angels while listening to it. The beauty of this Academy is that
								they&apos;ve incorporated courses not just for us to gain knowledge about Islam but also
								how to incorporate it in our daily lives and I feel that is what is the most important
								thing, amal. The faculty focuses on helping us apply Islam in our lives, they help
								clarify our doubts, help us evolve ourselves through the word of Quran and Hadith. My
								favourite subject is Tajweed, the groups created here have given me the opportunity to
								meet some lovely people who now seem like a family to me. The Tajweed teachers take a
								personal interest in improving our Tilawat-e Quran and also push us to strive for more
								and more. I personally feel like being a part of Junaid Jamshed Academy has changed my
								life for the better, almost as if Allah chose me to be a part of this blessed journey
								with some beautiful people whom He loves.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								SARAH WASEEM - BERLIN (How I became a part of JJ Academy)
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								It was back in the summer of 2018, I had just recently graduated and was looking forward
								to spending some time relaxing before I went for my post-grad. Back then, I would think
								of myself as somewhat religious because I had been covering my head since I was 10 years
								old and also did my obligatory prayers, but that was just about it. Little did I know, a
								lot more was required from me by Allahﷻ to be a good muslim. While I was daydreaming
								about earning loads of money, travelling the world, getting married and all my shaadi
								dresses, we were invited by Muniza Aunty to join the first ever meeting at embassy
								lodges where and when the foundation of Junaid Jamshed Academy of Quranic Sciences was
								laid. I started taking the weekly classes there just because I had time on my hands,
								understanding very little of the courses, as they were in urdu but still trying and
								surprisingly enjoying it because for the first time in my life being in those classes
								was something I wanted to do. People around me in the class would say how they felt calm
								when they entered the room in the morning and how the place was a haven from the outside
								world. But to my dismay, I didn&apos;t have those feelings. All I knew was to take the
								class, get my homework done and compete to be a good student. But Allahﷻ had planned
								more for me, being the youngest in the class I would get the most attention and
								affection from my teachers. This love was the reason that I chose to give up on my plans
								of post grad and stay at the Academy to complete my Dirasat-e-Deeniya degree. We all
								know how, sadly, in our society religious studies aren&apos;t much appreciated as much
								as the worldly studies are, and hence I was under pressure to focus on my career. The
								peer pressure would get to me but at the same time I was enjoying my Dirasat course,
								understanding not just what was in the books but also what was my real duty, what Allah
								ﷻ wanted from me and what way life is supposed to be lived. Each day, me and my mother
								would drive an hour to attend classes, the conditions were mostly unfavourable as
								according to the people around us, going was just a waste of time. To my surprise, each
								day when with Allah ﷻ will, we got there, we&apos;d learn a lesson from our brilliant
								teachers, that seemed like was a message from HIMﷻ of how I was required to act. Here I
								was taught not just what was sabr, shukar, tawakul, tadabbur but also how to practise it
								all in my life. I got nikkah-fied in between my course. The girl who hadn&apos;t
								repeated a single dress in the first three months since classes started, now dreamed of
								getting married the way Nabiﷺ had wed off his daughters. Not to forget, a happy married
								life, is also a result of the numerous lessons I learnt in my time at the Academy,
								including that a muslim&apos;s best tools are dua and two nafal of hajat. Slowly, I
								started feeling the calm, like everyone had said, upon entering the class, by being in
								the presence of my beloved teachers, by listening to their words of wisdom. JJ Academy
								became my safe haven, a medium of connection between me and Allahﷻ The chances had
								seemed bleak throughout but in 2021 I completed my Dirasat course. The person who had
								entered the academy on the first day was changed, all thanks to the care, attention and
								love given to me in my time there. I am forever indebted to Shaheed Junaid Jamshed
								Academy of Quranic Sciences and the people who make it, for bringing these changes in my
								life and for shaping me into a better muslim.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>WAJIHA KHAN - BELGIUM</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Living in the heart of Europe, years of emptiness within me have completely vanished
								through my student association with Junaid Jamshed Academy and my beautiful Muniza Aapa
								along with all her team. To the entire Ummah, they are all the soldiers of Allah
								(جنودالله) Al Hamdu Lillah this is the prayer which didn&apos;t go unanswered because I
								asked Allah (on my Umrah) to be given a chance once in my lifetime to learn from Muniza
								Aapa. We were then given this great opportunity by Allah when all the classes started
								online. Being educationists, their hard work, intelligence and character are the main
								goals. Muniza Aapa and her team have played a vital role in developing our greatest
								abilities and to strive for more and more progress, as Muslims. Her efforts, humbleness
								and hard work replace an empty mind with an open one through all her Islaahi talks. Al
								Hamdu Lillah!
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								<p>WAJEEHA IRFAN - HOUSTON</p>
								<p>
									The Junaid Jamshed Academy not only effectively educates but also provides a very
									interactive platform to connect with others and share experiences and ideas.
								</p>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I am Wajeeha, a 17 years old Pakistani girl from the United States of America. Living in
								a non-Muslim country often times makes practicing Islam more challenging. Although in
								America, we have the constitution that supports the freedom of religion and expression,
								it is not as hard as in many European countries where there are strict laws passed
								against Islam i.e. Hijab ban, etc. Alhamdulillah. To be steadfast on my emaan and to
								learn more about my religion, I keep on trying to connect with educational institutes
								all across the world for help and guidance. May Allah SWT preserve them all, Ameen. I am
								also a published writer and have been writing for many anthologies and magazines. I
								write both prose and poetry in English and Urdu and enjoy reading and gaining knowledge
								as well. Knowing this, one of my friends Tayba from Islamabad who was associated with
								the Junaid Jamshed Academy (Islamabad), recommended me to their newsletter as a writer
								back in December 2021. She helped me contact the administration and hence, my articles
								were selected to be published in their upcoming newsletter. I&apos;m extremely grateful
								to be a part of the JJ Newsletter team, Alhamdulillah. It has been quite a journey since
								then and an absolute pleasure working with the JJ Academy over the past three months. I
								definitely look forward to serving and learning more with them, InshaAllah. The
								administration is very coordinative, kind, and ambitious. The best part is how they have
								appreciated, encouraged, and guided me over my mistakes instead of discouraging me and
								letting me down by harshly criticising my mistakes. The Junaid Jamshed Academy is
								beneficial for all but I find it particularly helpful for females, especially the youth.
								They have WhatsApp groups for females to appropriately answer any questions that they
								may have in the light of Islamic Law. Not only this but there are also meetings
								conducted for those who cannot join onsite which makes it convenient for everyone,
								Alhamdulillah. It has been a great experience for me so far and I would recommend this
								to anyone who is passionate and willing to learn about the religion of Islam. The Junaid
								Jamshed Academy not only effectively educates but also provides a very interactive
								platform to connect with others and share one&apos;s experiences and ideas. May Allah
								SWT preserve and flourish them and make us all among those who help spread the message
								of Islam and practice it in the best manner. Ameen ya Rabbal Aalameen.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>AYESHA HAROON - ISLAMABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I had been hearing about Junaid Jamshed&apos;s sister teaching somewhere and I wanted to
								be in her presence but I didn&apos;t know where to find her. A while passed when I was
								at a friend&apos;s gathering and someone told me about the Junaid Jamshed Academy. I
								knew it was my calling. I went there with a lot of questions in my mind. Will Allah
								reward us in this life for our honesty? Will Allah protect us from getting hurt if we
								don&apos;t hurt others? At the Academy, I began to realise how Islam has never been
								about the worldly life. The worldly life is a mere drop in the ocean of existence we are
								in. This world is just a test Allah has put us through. The real reward lies in the
								afterlife. Not only did my journey through this academy brought me closer to Allah, it
								also taught me about the rights of other people and motivated me to always strive to be
								a better person. Because Allah rewards us both in this world and the hereafter. Now I
								feel eager to devote myself to the cause of Allah. To keep repenting and then striving
								for the better. Now the difficulties seem less difficult. It feels like I have
								discovered this new formula to life. Now I truly know how Allah is with me through
								everything.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>SHAZIA KHURRAM - KARACHI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								My name is Shazia Khurram and I work for Meezan Bank. I started to attend Muniza
								Apa&apos;s Tafseer class in 2020. The classes brought a new perspective to my life. I
								look forward to the classes every week. I now understand the Quran better and understand
								why a particular ayat was revealed. The understanding of the Quran makes it easier to
								implement it in my daily life and I pray to Allah that I always follow the Quran and
								Sunnah, May Allah bless Muniza Aapa always and allow more and more people to benefit
								from the academy. Jazakallah Khair.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>NOOR UL HUDA - RAWALPINDI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Alhamdulillah by the grace of Allah Subhanahu wa Ta&apos;ala, I am associated with this
								Academy since 2020. I am so grateful to my teachers who always give us lots of
								motivation about our blessed Deen &quot;Islam&quot;. Shaheed Junaid Jamshed Academy of
								Quranic Sciences provides us a vast platform to receive Islamic education. The
								environment of the Academy is so different from others. Muniza Javed (Hamsheera Shaheed
								Junaid Jamshed) teaches Tafseer wonderfully well. May Allah accept her efforts and be
								very pleased with her.I am very thankful to all the coordinators and teachers of the
								academy including Hadith teacher Sumaiya baji,Seerah teacher Seema Aapa and Aalimah
								Farwa Khalil. Muzaina Usman, the sweetest Fiqh teacher ever, Samina Sanaullah Aapa
								teaches Hayatul Muslimeen beautifully.All Coordinators are also very helpful and
								friendly. May Allah accept all of their efforts and also be very pleased with you
								people. (Aameen)
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>FATIMA SAAD - RAWALPINDI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Allah loves you more than you love Allah!! You take one step towards HIM and HE rewards
								you with so much more. JJ Academy has helped me take that one step Alhamdulillah.
								It&apos;s a beautiful platform for women to take classes from super qualified Ustazahs.
								Everyone at JJ Academy helps you to elevate your imaan, be it the teachers, the
								coordinators or the fellow students. Blessed to be a part of it. It&apos;s actually just
								a part of what I feel about this institute. There&apos;s so much more love and duas for
								u all..u guys truly are gems that Allah has blessed us with..may Allah bless u so so so
								much more.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>MARIAM AMIR - KARACHI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I feel blessed that I am studying in this Academy. My sincere gratitude to you for
								making it possible for me to learn Tajweed, Arabic Grammar, Seerah and to learn through
								amazing Islahi lectures. I congratulate this Academy for having brilliant teachers.Thank
								you teachers for amazing lectures and all your efforts for grooming us as better
								muslims. Special thanks to Muniza Aapa, Seema Aapa, Ayesha Habiba Baji (my tajweed
								teacher) and to Dr. Kiran Zahoor.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>TAHIRA MUGHAL - HYDERABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Mein 2020 se aap ki Academy se munsalik houn. Mairi friend ne bataya tha. Classes leti
								houn, khas torh per Arabic ki class ki regular student houn. Aur bhi leti houn per maira
								sab se bara faida ye hoa kay mein soch bhi nahi sakti thi kay mein kabhi apny qaza hui
								namazen poori kar sakoun gi. Fiqah waly teacher ney aik din class mein bataya kay aap
								qaza namazen kaisy poori karein apney saalon ka aysey hisab lagayen.Teacher ke kehne se
								pehle mein ney qaza namaz parhna toh shuru kiya tha par koi idea nhi tha. Allah k fazal
								se aapki Academy ki waja sey mairi zindagi ke 3 mah ki qaza namaz poori hui.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>ANUSHA ARIF - ISLAMABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								With so many memories pouring in, I write about my time with Junaid Jamshed Academy of
								Quranic Sciences. Joining Junaid Jamshed Academy has been something I longed for since
								the academy started.I wasn&apos;t a resident of Islamabad so it remained a wish but
								surely Allah has been so kind.HE brought to so many of us living across the globe, the
								online system of classes and the experience then is something I cheer for every minute.
								The Academy has some of the most knowledgeable, compassionate and humble teachers on the
								planet! You won&apos;t find anywhere such a friendly, learning environment. The truly
								amazing journey started almost two years back.Apart from the on campus programmes, the
								Academy has a lot to offer you online. We wanted to dive into the Quran, Muniza Aunty
								was there with the Tafseer sessions. We craved to listen to stories from the Seerah,
								Seema aunty and Zainab baji did the honors. We got Fiqhi problems,not an issue,the
								solution was Alhamdulillah one step away from Muzaina baji&apos;s class. And
								there&apos;s a long list to mention but so much for now. I can confidently say. the
								Academy has taught me to own Allah(SWT) and Islam, to believe that it&apos;s Allah
								who&apos;ll handle your tasks and to develop a very humble and generous relationship
								with fellow beings. Most importantly the learning here has made me wish for a life led
								by the rulings and guidance of Allah(SWT) and Prophet (S.A.W) To sum it up, it&apos;s a
								beautiful virtual journey with an absolute pleasure seeing the teachers do the
								task.It&apos;s been emotional at moments,it&apos;s been joy at times and more
								appropriately it&apos;s been motivation every time.We smiled,we cried,we enjoyed and we
								were inspired. May Allah(SWT) guide us all.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>HUMAIRA NADEEM NAFEES - CHISHTIAN, BAHAWALNAGAR</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I am Humaira Nadeem, a restless soul. Allah has introduced me to Junaid Jamshed Academy.
								It was difficult for me to get to and from Haber Madrassa. I prayed daily to Allah to
								make things easier for me. So one day all of a sudden Allah Subhanahu Wa Ta&apos;ala
								connected me with this academy. Before joining this Academy, my soul was never
								satisfied; be it religious education or worldly. There was always a thirst for more. So
								when Allah connected me here, my soul became settled. All my teachers are very good and
								they teach so well and with so much love that every single word of theirs falls on my
								heart. Alhamdulillah, this is the institution that has brought me closer to my ALLAH; I
								have learnt to recite the Holy Qur&apos;an here. Also Hadith, Seerah, Fiqh and Arabic
								Grammar. First of all, I was sadly concerned with only a few lessons in Islamic studies.
								Due to JJ Academy, I joined Madinah and Alhamdulillah from there my memorization
								started. ALHAMDULILLAH, I have memorised one JUZ and am onto my next one now. JJ Academy
								is a part of my life. I pray to Allah Subhanahu wa Ta&apos;ala that may Allah grant all
								my teachers and Admins a long and healthy life. May Allah be pleased with all my
								teachers and Admins. Allah Subhanahu wa Ta&apos;ala gave me the opportunity to benefit
								from all of them, ALHAMDULILLAH
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>HUMERA ZEESHAN - KARACHI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								A journey which started visualising to meet Junaid jamshaid ,but he was more loved by
								the CREATOR than us .So I continued to listen to his bayans. Now my second dream was to
								join JJ Academy ( got to know about that while scrolling Facebook) Initially, again
								failure as they didn&apos;t offer online courses in 2018. Time never stops and always
								brings new things; it was 2020, lockdown due to Covid & hopelessness everywhere but
								Allah knew it was my time, my light was lit somewhere in the heavens (my dream would
								come true IA). In a nutshell my life is changing ,my path towards Allah is more clear
								now. I&apos;m the one who loves Covid lockdown from the bottom of my heart. In the end
								I&apos;m deeply thankful and blessed for the special, unique amazing people in my life
								through JJ Academy who support me, uplift me, comfort me and bring joy to my soul as
								they share the most worthy lessons of QURAN in the precise magical way that connects us
								to the book of ALLAH for good. My being truly loves you all!!!
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>DR.SHAHEENA QURESHI - AZAD KASHMIR</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I am Dr. Shaheena Qureshi, a born muslim by the blessings of Allah but this does not
								mean that I was a real practising one as in Pakistan, 90 percent families only just pray
								namaz and read quran without knowing the meanings of what they are reciting and what are
								the rules to recite properly. We don&apos;t even know the basics of Roza, Hajj and
								Zakat. Even in school very little of islam is taught in Deenyat. By the blessing of
								Allah SWT, I got connected to JJ Academy. This brought a big change in my life. I came
								close to Allah SWTand came to know what real islam is and how to practice it correctly.
								It reduced my depression as I came to know the aim of my life. Previouly i just read th
								quran but now i started to understand it and how to recite correctly with rules, how to
								live as a Muslim and how to prepare for the Aakhirah. Getting connected to JJ Academy
								connected me to Allah and now I make excellent use of my time. I anxiously wait and try
								to attend 100 percent of the online classes conducted by the Academy. I have been
								connected with this Academy for more than one and a half year now and can never forget
								the ehsaan of Seema Iftikhar, Muniza Javed, Muzaina Usmani and my most tolerant tajweed
								teacher, Hanifa Basham. All others who teach other subjects are also very brilliant and
								very competent. I shall be connected to this Academy till my last breath as it has
								brought me from darkness to light; connected me to Allah and HIS Messenger,Rasool Allah
								SAW and will be guiding me to get the best place in life hereafter. Thankyou Shaheed
								Junaid Jamshed bhai and all my teachers at the Academy. Love you all.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>MARIA BUZDAR - KHANEWAL</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Assalamualaikum! JJ Academy ki tmam mu&apos;allimaat bohat achi hein. Ma shaa ALLAH
								bohat acha parhati hein. JJ Academy ki classes aik medicine ki tarha hein, jab laity
								hein toh dil ko sukoon milta hai! ALLAH JJ Academy ki teachers ko khush rakhein aur
								Jaza-e-khair atta farmaein, ameen summa ameen.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>AYESHA IMRAN - KARACHI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I am very happy and blessed to be a part of Shaheed Junaid Jamshed Academy of Quranic
								Sciences. Ever since joining JJ Academy&apos;s Online weekly classes, I have been
								learning a lot about the Quran, Seerah, Hadith & Arabic Grammar etc. This Institute gave
								women the opportunity to acquire Islamic Education specially Quran, online during
								COVID-19 lockdown. This Academy has excellent faculty members and Management... Muniza
								Aapa&apos;s method of teaching is the best and with a positive mindset she always
								motivates us towards learning the Quran. My children also joined Seerah class last year.
								Me and my children learnt a lot about the Seerah Tayyaba of Nabi Pak (SAW).
								Alhamdulillah I am still a student of JJ Academy and feel a positive and spiritual
								change in my life...am very thankful to all my teachers of JJ Academy for teaching me so
								beautifully the Deen of ALLAH. JAZAK Allah khair to all of you.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>ROMANA - KOHAT KPK</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								So blessed to have been provided with a platform in such a time of pandemic where we
								could learn and take full benefit from this era of internet and gadgets. Being a part of
								this academy has broaden my outlook for life and obviously, I strive to share my
								knowledge with people and practice my own life according to the teachings of Islam in
								every possible way.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>SADIA ADNAN - ISLAMABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I&apos;ve been a part of JJ Academy since September 2021 as a student, having a very
								unique and enchanting experience. The environment is very friendly and tempting and the
								staff is so overwhelming. Looking forward to having a long lasting journey with JJ
								Academy and MUNEEZA AAPA to complete the rest of my education. Hopefully the way will be
								full of blessings and glitters with the cooperation of teachers and with the soothing
								shelter of Muneeza Aapa. May the lights of this Academy bring knowledge and practice to
								the world and introduce the way to Allah for scattered Muslims
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>RIDA ADNAN - ISLAMABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I&apos;ve been teaching at JJ Academy for the last few months and have had an amazing
								experience. The crew is very supportive and humble. The environment is very relaxing,
								everyone is very keen on their work. Supervision of Muneeza Aapa is such a blessing for
								us. The time I have spent there is memorable for me & which I&apos;ll remember forever.
								May Allah grow JJ Academy and make it one of the shiniest institutes of the world.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>SIDRA RASHID (JJ Academy, a beacon of guidance)</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Shaheed Junaid Jamshed Academy of Quranic Sciences proved truly a guiding star in the
								darkness for many including myself. And indeed one of the best traditions with which
								Muslims can remain steadfast towards religion is by connecting with the righteous
								scholars. This gave me intense respite to be surrounded by such a lovely bunch of
								religious people whose sole aim is to please Allah alone. All their efforts go for
								saving Muslim Ummah from going astray, having no worldly perspective at all but to
								nourish our lives with noor of Emaan. Their daily reminders in classes help in keeping
								us to remain on track from the worldly woes that we all undergo. Academy offers weekly
								Tafseer class with such a humble and loving being, Ustazah Muniza Javed, Seerah with our
								respected Ustazah Seema Iftikhar, Hadees & Hayatul Muslimeen by Ustazah Sumayah Kakakhel
								and Ustazah Sameena Sanaullah, Fiqh by Ustazah Muzaina Usmani, Arabic grammar by Dr.
								Kiran Zahoor while Tajweed class with ever sweet and adorable Ustazah Huma Afzal ( T.10
								being a second home for all the students and missing her class is like missing a dose of
								medicine). Being fortunate enough to be a student of Madina Fajr Quran halaqa is also
								credited and associated with this chain of Academy. Recent addition of Khatm e Nabuwat
								class is an eternal blessing while Islahi Khutbahs are soul enriching. May we get more
								benefits from the pearls of Quran and may we get real akhlaq of Quran in days to come
								through these classes. I was unable to catch up the classes because of the conveyance
								issue but this pandemic proved a blessing in disguise as the academy started to offer
								its online classes too for all the students globally. For all those who are searching
								for a place of refuge , let me briefly tell you that JJ Academy established in June 2018
								,affiliated with the Wifaq ul Madaris is based at the legacy of Shaheed Junaid
								Jamshed&apos;s sacrifices for this beautiful religion under the supervision of his
								sister Ustazah Muniza Javed. Its main campus is in G.10/2 , ST 30, H#598, Islamabad
								.This platform gives you an awareness on how to become a productive Muslim , how
								Allah&apos;s closeness should be our central concern in all our matters and helps in
								strengthening a unique bond with Quran. May Allah accept us all and keep us among his
								righteous people. May Allah allow our hearts to be softened and to remain connected with
								Him. Dear team Junaid Jamshed Academy including all caring coordinators, thank you is a
								word way too little for your efforts, passion and love for making this journey a
								beautiful one. May Allah be pleased with you and may you witness its reward in Jannah
								multifold ultimately. May Allah increase the ranks of Shaheed Junaid Jamshed and his
								family and include them among his most beloved persons and may the day they meet Allah
								be the happiest day of their lives. Aameen
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>RIDA ADNAN - ISLAMABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I&apos;ve been teaching at JJ Academy for the last few months and have had an amazing
								experience. The crew is very supportive and humble. The environment is very relaxing,
								everyone is very keen on their work. Supervision of Muneeza Aapa is such a blessing for
								us. The time I have spent there is memorable for me & which I&apos;ll remember forever.
								May Allah grow JJ Academy and make it one of the shiniest institutes of the world.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>AYESHA JABEEN - MUZAFFARABAD</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I&apos;m very glad to be a part of JJ Academy. I have learnt a lot about our Deen from
								this academy. In my city (Muzaffarabad Azad Kashmir) I have seen only Al Huda
								Academy&apos;s efforts, not Hanafi Fiqh. I always wondered why there was no one else
								holding different programs related to Hanafi Fiqh. My elder sister told me about JJ
								Academy. When I started taking classes of Fiqh, Tajweed, Grammar, Tafseer and Hadith I
								thanked Allah first and then this Academy. I think in Pakistan and in foreign countries,
								JJ ACADEMY gave us a chance to learn too many aspects of Deen e Islam on one platform.
								Their team is awesome (Seema Aapa, Ayesha Aapa, Muzaina Aapa, all other teachers
								including the Arabic teacher are too good Alhamdulillah. They all are blessed people.
								JazakAllah khair JJ Academy. May Allah SWT bless you all and give us strength for good
								deeds, Ameen
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>FOUZIA ASIF</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Main jitna apne Rabb ka shukar karoun kam hai jis ne mujhe ap logon se jora. Iss academy
								ki mujhe talash thi main ghar se bahar ja kar ye tamam courses nahi kr sakti thi lekin
								is academy ki wajha se online main ghar baith kr tafseer aur tajweed course kar rahi
								houn. Meri zindagi ki sab se bari khoahish puri hoi. AllahTa&apos;ala aap sab ko himat,
								taqat de aur hum ziyada se ziyada mustafeed ho saken aur Allah Ta&apos;ala aap tamam
								ustadon ki umar mein barkat atta farmaye. Mein apne Rabb k aur qareeb ho gai Allah pak
								bht bht ajar de dono jahano main Ameen Summa Ameen.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>HUMNA SYED (How JJ Academy changed my life)</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I am a CA student and I am doing my articleship and attending online CA classes.
								It&apos;s difficult for me to attend physical islamic classes or do proper islamic
								courses, thus these JJ Academy online classes are a great blessing for me and I am so
								thankful to Allah Ta&apos;ala for them. These classes brought a lot of change in my deen
								and dunya. I am still a sinner but now I come back to Allah more quickly Alhamdulillah.
								I have started covering my face, may Allah keep me consistent in doing so. I came to
								know of authentic scholars like Mufti Taqi Usmani, Molana Ashraf Ali Thanvi & Imam
								Ghazali. Now I stress on haqooq ul ibaad. I have started correcting Tajweed of Quran and
								reciting Quran Pak daily. I have started following sunnahs in my life and get knowledge
								of seerah of Muhammad (S.A.W.W). I have started reading authentic islamic magazines and
								books. I got connected to khatam e nabuwat. All teachers are very nice and I want to be
								one of them. May Allah Ta&apos;ala give jannat ul firdous to all those who are part of
								this ACADEMY.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>ARIBA AKRAM - FORT ABBAS</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Alhamdulillah I weekly attend the online Tafseer class with Muniza Aapa and Fiqh class
								with Muzaina Baji and some other classes as well. Alhamdulillah these classes changed my
								whole life. So how i connected with this platform one day I scroll my Facebook I see a
								story from Shaheed Junaid Jamshed page where they share link of online form. Since I was
								already a big fan of Junaid Bhai, so without waiting, I just filled the online form.
								After a few days Alhamdulillah, our classes started. After this I have no words how
								gradually these classes touched my heart and changed my life. Only due to Muzaina
								Baji&apos;s lectures and dars, first of all I started my Salah regularly and stopped
								listening to music and watching dramas, movies and other bad habits. I started Abaya and
								hijab in university regularly, Alhamdulillah. The dars Muniza Aapa gave before the last
								Ramazan started, it really touched my heart very deeply and I think it was the best
								Ramazan of my life. Literally Muniza Aapa and all other teachers changed my whole vision
								of thinking. May Allah bless all the teachers and Shaheed Junaid Jamshed Academy as
								well. I wish I could attend on campus classes as well. JazakAllah Khair.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>IQRA SIDDIQUE</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								It is a great privilege for me to have joined this Academy. Before joining here, I did
								not know anything about Tajweed. Infact, I didn&apos;t even know the word Tajweed. After
								joining this academy, Alhamdulillah, I have been able to recite the Qur&apos;aan
								according to the rules and regulations. All this was made possible by the Junaid Jamshed
								Academy of Quranic Sciences. Apart from Tajweed, there is a lot to learn in Fiqh, Seerah
								of the Prophet (صلی اللہ علیہ وآلہ وسلم) and Tafseer. May Allah Subhanahu Wa Ta&apos;ala
								grant all the members of this Academy the best reward in both worlds. Ameen Summa Ameen
								ya Rabb ul Alameen
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>NOSHABA GHAURI</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>Very informative. Good speakers. Out class knowledge.</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>AYESHA ASIF - LAHORE</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								I joined Junaid Jamshed Academy a few months back. I had and still am having a very nice
								experience through this Academy. Here, I was introduced into a very comfortable and
								loving environment where highly qualified teachers teach and train us. Currently, I am
								enrolled in two courses; Khatme Nabuwwat course, and Tajweed Teacher Training Course.
								The teachers of both of these courses are very polite and possess extensive knowledge
								about their subjects. In such a beautiful and productive environment, the students have
								no option other than to be respectful to the teachers and to keep learning by absorbing
								the knowledge delivered by them. In such a place, the students have zero stress level
								and have increased curiosity to learn about the Deen of Allah. May Allah reward the
								entire team of Junaid Jamshed Academy. InSha Allah, I&apos;ll join more courses too.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>HUMERA JAMSHED</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								First of all I will right the Hadith which made me fond of learning the Qur&apos;an by
								Tajweed the prophet Muhammad (PBUH) said: &apos;The best among you (Muslims) are those
								who learn the Qur&apos;an and teach it.&apos;Sahih al - Bukhara 50271. A slight
								mispronunciation of the Quran&apos;s words can completely change their meaning. Reading
								the Quran with Tajweed prevents the reciter from making mistakes in recitation, and thus
								obtaining Allah&apos;s (SWT) approval. Learning Tajweed is an issue of absolute
								necessity, whoever does not apply Tajweed to the Quran, then a sinner is he. In this
								regard, Allah (SWT) says: &apos;and recite the Quran ˹properly. Alhamdulillah when I got
								to know that Shaheed Junaid Jamshed Academy of Quranic Sciences has given me an
								opportunity to learn Tajweed Quran online, the first thing I did was take admission in
								it. Since I started learning Tajweed in this Academy, my life has changed a lot. My
								prayers become correct and before I didn&apos;t even know if I prayed correctly. One of
								the most essential benefits of learning Tajweed through this Academy is that they use
								modern techniques of learning. For example our teacher taught us by providing tools like
								pictures and diagrams that make it easier for us to learn and understand. There was so
								much relief in my heart when I strengthened my connection with Allah and made it a part
								of my daily routine to learn how to read the Quran with proper Tajweed and revise it.
								Shaheed Junaid Jamshed Academy is a pioneer in this regard. They provide the best Online
								Tajweed classes and teachers and tools that helped me reach my goal and learn Quran with
								Tajweed from scratch.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}

export default Testimonials;
