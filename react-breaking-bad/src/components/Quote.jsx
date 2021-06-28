import React from 'react'

const Quote = ({quote}) => {
	return (
		<>
		{quote.quote}
		<p>-{quote.author}</p>
		</>
	)
}

export default Quote
