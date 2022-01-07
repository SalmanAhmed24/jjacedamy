import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from 'react-accessible-accordion';

function FaqAccordion() {
	return (
		<Accordion allowZeroExpanded={true}>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>When do admissions start?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>Admissions start generally after final exams in March and last up until August.</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>What is the monthly fee for on-campus classes?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>The monthly fee for on-campus classes is PKR 2,000.</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>On what days of the week do on-campus classes take place?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>On-campus classes occur from Monday to Friday.</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>What are the class timings for on-campus classes?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						The Darasaat-e-Deeniya courses and Tajweed classes are from 10:00 am to 1:00 pm, second and
						third year Aalimah course classes are from 9:00 am to 12:00 pm, and first year Aalimah course
						classes are from 3:00 pm to 5:00 pm.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>When do online classes start?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						Online classes for some subjects including Tafseer and Hadith are ongoing since June 2020 while
						other subjects such as Arabic Grammar and Seerah have been started again and Tajweed courses
						start as soon as the required number of students for a group have signed up.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>What is the fee for online classes?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>There is no fee for online classes.</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>How can I register for online classes?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>You can register through the forms provided on our website.</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>Once I register for online classes, what will happen?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>You will be assigned a WhatsApp group where we share the Zoom links for each class.</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
}

export default FaqAccordion;
