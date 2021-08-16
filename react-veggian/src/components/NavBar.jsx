import React from 'react'
import logo from "../assets/logo.png"
import { Row, Col } from "react-bootstrap";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
					aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarColor03">
					<Row className='w-100'>
					<Col className="col-12 w-100 d-flex justify-content-between">
						<ul className="navbar-nav me-auto">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="http://localhost:3000" role="button"
									aria-haspopup="true" aria-expanded="false">Language</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="http://localhost:3000">English</a>
									<a className="dropdown-item" href="http://localhost:3000">Spanish</a>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="http://localhost:3000">Sign up for Email</a>
							</li>
						</ul>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link" href="http://localhost:3000">Change my location</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="http://localhost:3000">About</a>
							</li>
						</ul>
					</Col>
					<Col className="col-12 w-100 d-flex justify-content-between">
						<ul className="navbar-nav me-auto">
							<li className="nav-item active">
								<a className="nav-link" href="http://localhost:3000">Download App</a>
							</li>
						</ul>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<form className="d-flex">
									<input className="form-control me-sm-2" type="text" placeholder="Search" />
									<button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
								</form>
							</li>
						</ul>
					</Col>
					</Row>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
