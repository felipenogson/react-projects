import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Formulario from './components/Formulario';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Prices from './components/Prices';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  `;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #ddd;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 16px;
    background-color: #66A2FE;
    display: block;
    margin-top:-21px;
    z-index: -3;
  }
  `;



function App() {

  const [coin , setCoin ] = useState('');
  const [crypto, setCrypto] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {

      const gettingCoinValue = async() => {
        // To prevent firstime execution
        if (coin === '') return ;


        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const response = await axios.get(url);

        // Show the spinner
        setLoading(true);

        // Show the spinner for 3s
        setTimeout( () => {

          setLoading(false)

        // Saving the results
        setResults(response.data.DISPLAY[crypto][coin])
        }, 3000);


      }

      gettingCoinValue()
  }, [coin, crypto])
   

  // Show spinner or results
  const component = (loading) ? <Spinner /> : <Prices results={results} />

  return (
    <Contenedor>
      <div>
        <Image
          src={image}
          alt="crypto image"
        />
      </div>
      <div>
        <Heading>Instant Cryptocurrency Prices</Heading>
        <Formulario 
          setCoin={setCoin}
          setCrypto={setCrypto}
        />
        {component}
      </div>
    </Contenedor>
  );
}

export default App;
