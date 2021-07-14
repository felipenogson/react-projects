import React from 'react'
import styled from '@emotion/styled';

const Prices = ({results}) => {

	const ResultsDiv = styled.div`
		color: #ddd;
		font-family: Arial, Helvetica, sans-serif;
		`
	const Paragraph = styled.p`
		font-size: 18px;
			span {
				font-weight: bold;
			}
		`
	const Price = styled.p`
		font-size: 30px;
		font-weight: bold;
		`

	if ( Object.keys(results).length === 0) return null;
	console.table(results);
	return (
		<ResultsDiv>
			<Price>The price is: <span>{results.PRICE}</span></Price>
			<Paragraph>Today's High: <span>{results.HIGHDAY}</span></Paragraph>
			<Paragraph>Today's Low: <span>{results.LOWDAY}</span></Paragraph>
			<Paragraph>Day's variation: <span>% {results.CHANGEPCT24HOUR}</span></Paragraph>
			<Paragraph>Last Update: <span>{results.LASTUPDATE}</span></Paragraph>
		</ResultsDiv>
	)
}

export default Prices
