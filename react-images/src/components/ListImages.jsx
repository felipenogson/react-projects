import React from 'react';
import ImageCard from './ImageCard';


const ListImages = ({images}) => {
	return (
		<>
			{ images.map(image => (<ImageCard image={image} key={image.id}/>)) }
		</>
	)
}

export default ListImages
