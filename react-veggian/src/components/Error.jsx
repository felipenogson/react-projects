import React from 'react'

const Error = (props) => {
	return (
		<div className="card border-danger mb-3" style={{ maxWidth: " 20rem"}}>
			<div className="card-header">Oh snap!</div>
				<div className="card-body">
				<h4 className="card-title">Error</h4>
			<p className="card-text">{props.message}</p>
			</div>
		</div>
	)
}

export default Error
