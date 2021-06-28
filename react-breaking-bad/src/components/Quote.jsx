import React from 'react'

const Quote = ({quote}) => {
	console.log(quote)
	return (
		<>
		{quote.quote}
		<p>{quote.author}</p>
		</>
	)
}

export default Quote
