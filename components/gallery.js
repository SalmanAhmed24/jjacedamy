import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Nikkah1 from '../public/images/nikkah-1.jpeg';
import Nikkah2 from '../public/images/nikkah-2.jpeg';
import Nikkah3 from '../public/images/nikkah-3.jpeg';
import Nikkah4 from '../public/images/nikkah-4.jpeg';
import Nikkah5 from '../public/images/nikkah-5.jpeg';
import Nikkah6 from '../public/images/nikkah-6.jpeg';
import Nikkah7 from '../public/images/nikkah-7.jpeg';
import Nikkah8 from '../public/images/nikkah-8.jpeg';

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
	};
}

export default function QuiltedImageList() {
	return (
		<ImageList variant="quilted" cols={4} rowHeight={300} className="imagesGrid">
			{itemData.map((item) => (
				<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
					<img
						className="galleryImg"
						{...srcset(item.img, 121, item.rows, item.cols)}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: './images/nikkah-1.jpeg',
		title: 'Breakfast',
		rows: 2,
		cols: 2
	},
	{
		img: './images/nikkah-2.jpeg',
		title: 'Burger'
	},
	{
		img: './images/nikkah-3.jpeg',
		title: 'Camera'
	},
	{
		img: './images/nikkah-4.jpeg',
		title: 'Coffee',
		cols: 2
	},
	{
		img: './images/nikkah-5.jpeg',
		title: 'Hats',
		cols: 2
	},
	{
		img: './images/nikkah-6.jpeg',
		title: 'Honey',
		author: '@arwinneil',
		rows: 2,
		cols: 2
	},
	{
		img: './images/nikkah-7.jpeg',
		title: 'Basketball'
	},
	{
		img: './images/nikkah-8.jpeg',
		title: 'Fern'
	},
	{
		img: './images/ind-1.jpeg',
		title: 'Breakfast',
		rows: 2,
		cols: 2
	},
	{
		img: './images/ind-2.jpeg',
		title: 'Burger'
	},
	{
		img: './images/ind-3.jpeg',
		title: 'Camera'
	},
	{
		img: './images/ind-4.jpeg',
		title: 'Coffee'
	},
	{
		img: './images/ind-5.jpeg',
		title: 'Hats'
	}
];
