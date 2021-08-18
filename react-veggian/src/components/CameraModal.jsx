import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CameraScanner from './CameraScanner';

const CameraModal = ({show, onHide}) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			animation={false}
		>
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
           Scanner
           
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <h4>Scan the BarCode</h4>
		 <CameraScanner onHide={onHide} />
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
  
	)
}

export default CameraModal
