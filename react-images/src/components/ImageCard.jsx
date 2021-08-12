import React from 'react'
import { Badge, Col, Card } from 'react-bootstrap';

const ImageCard = ({image}) => {

	const { largeImageURL, likes, views, webformatURL} = image;

	return (
		<Col lg={4}  md={6} sm={12} xs={12} className="mb-4">
		<Card >
			<Card.Img variant="top" src={webformatURL} />
			<Card.Body>
				<Card.Text>
					<Badge className="me-2" pill bg="light">
						<span className="me-1" style={{ color:'red'}}>
						<i className="fas fa-heart danger"></i>
						</span>
						{likes} Likes
					</Badge>
					<Badge pill className="me-2" bg="success">
						{views} Views
					</Badge>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-center">
				<a 
					href={largeImageURL} 
					className="btn btn-warning btn-block w-50" 
					target='_blank' 
					rel="noopener noreferrer">
					Go To Image
				</a>

			</Card.Footer>
		</Card>
		</Col>
	)
}

export default ImageCard
