import React from 'react'
import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const Error = ({message}) => {

	const [show, setShow] = useState(true);

	return (
		<>
		<Alert show={show} variant="danger" onClose={ () => setShow(false)} dismissible>
        <p>
			{message}
        </p>
      </Alert>
	  </>
	)
}

export default Error
