import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import Error from './Error';
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


const Formulario = ({setCoin, setCrypto}) => {

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
	const [currency, SelectCurrency] = useCurrency('Select Currency', '', CURRENCIES );

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

		// Validate fields
		if ( currency === '' | crypto === '' ){
			setError(true);
			return
		}

		setError(false);
		setCoin(currency);
		setCrypto(crypto)


	}

	return (
		<form 
			onSubmit={valueCoin}
		>
			{ error ? <Error message="All the fields are required" /> : null}
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
