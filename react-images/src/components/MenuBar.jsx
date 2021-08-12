import React, { useState } from 'react'
import { Navbar, Container, Nav, Modal, Button} from "react-bootstrap";



const MenuBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	return (
    <>
			<Navbar collapseOnSelect expand="lg" bg="light">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link onClick={handleShow}>About</Nav.Link>
							<Nav.Link href="https://github.com/felipenogson">
								felipenogson <i className="fab fa-github"></i>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React - Image Search Engine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Project made in React, thanks to the pixabay API and the frontend UI bootwatch+bootstrap framework.
          <hr />
            <ul className="list-group">
          	<li className="list-group-item"><i class="fas fa-phone"></i> (520) 264 8357</li>

            <li className="list-group-item"><i class="fas fa-envelope-square"></i> felipe@nogson.com</li>

            <li className="list-group-item"><i class="fas fa-rss"></i> <a href="https://felipon.org"> https://felipon.org</a></li>

            <li className="list-group-item"><i class="fas fa-map-marker-alt"></i> 1296 Imuris Ct, Rio Rico Az, 85648</li>
            </ul>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
	)
}

export default MenuBar
