import React, { useState, useEffect } from 'react';
import QuiltedImageList from './../components/gallery';
function GalleryPage() {
	return (
		<div className="galleryWrap">
			<h1 className="gallery-h">Gallery</h1>
			<QuiltedImageList />
		</div>
	);
}

export default GalleryPage;
