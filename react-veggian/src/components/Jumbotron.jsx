import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import CameraModal from './CameraModal';

const Jumbotron = () => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<div className="mt-2 mb-4 rounded-3">
			<div className="container-fluid py-5 ">
				<h1 className="display-5 fw-bold">Veggian</h1>
				<p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap.</p>
				<Button onClick={() => setModalShow(true)}> Scan BarCode</Button>
				<CameraModal show={modalShow} onHide={() => setModalShow(false)}/>
			</div>
		</div>
	)
}

export default Jumbotron
