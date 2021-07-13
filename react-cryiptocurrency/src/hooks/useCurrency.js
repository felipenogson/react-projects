import styled from '@emotion/styled';
import React, { Fragment, useState } from 'react'

const Label = styled.label`
	font-family: 'Bebas Neue', cursive;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.5rem;
	margin-top: 2rem;
	display: block;
	`;
const Select = styled.select`
	width: 100%;
	display: block;
	padding: 1rem;
	-webkit-appearance: none;
	border-radius: 10px;
	border: none;
	font-size: 1.2rem;
	`;


const useCurrency = (label, stateInicial, options) => {

	const [state, setState] = useState(stateInicial);

	const SelectCurrency = () => (
		<Fragment>
			<Label>{label}</Label>
				<Select 
					onChange={ e => (setState( e.target.value ))}
					value={state}
					>
					
					<option value=''>--Select Currency--</option>
					{options.map(option => (
						<option key={option.code} value={option.code}>{option.name}</option>
					)) }
				</Select>
		</Fragment>
	)

	return [state, SelectCurrency, setState];

}

export default useCurrency;
