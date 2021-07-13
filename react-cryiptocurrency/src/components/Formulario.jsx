import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';

// Styles for the components  
const Button = styled.input`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 10px;
	color: #fff;
	transition: background-color .3s ease;
	
	&:hover{
		background-color: #326ac0;
		cursor: pointer;
	}`


const Formulario = () => {

	// Creating state for the list of cryptocoins
	const [ cryptocoins, setCryptocoins] = useState([])
	const [ error, setError] = useState(false);

	const CURRENCIES = [
		{ code: 'USD', name: 'US Dollar'},
		{ code: 'MXN', name: 'Mexican Peso'},
		{ code: 'EUR', name: 'Euro'},
		{ code: 'GBP', name: 'English Pound'},
	];

	// using custom hook useCurrency
	const [currency, SelectCurrency, setCurrency] = useCurrency('Select Currency', '', CURRENCIES );

	// using custom hook useCrypto
	const [crypto, SelectCrypto] = useCrypto('Select Crypto', '', cryptocoins);

	// Call to API
	useEffect(() => {
		const apiRequest = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

			const result = await axios.get(url);
			setCryptocoins(result.data.Data);
		} 
		apiRequest()
	}, [])

	// When submit
	const valueCoin = (e) => {
		e.preventDefault();
		console.dir(e)
	}

	return (
		<form 
			onSubmit={valueCoin}
		>
			<SelectCurrency />
			<SelectCrypto />
			<Button 
				type="submit"
				value="Calculate"
			/>
		</form>
		
	)
}

export default Formulario
