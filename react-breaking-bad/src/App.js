import { useState, useEffect} from "react";
import styled from '@emotion/styled'
import Quote from './components/Quote'

const Button = styled.button`
  background-image: linear-gradient(to left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem, 3rem;
  font-size: 2rem;
  border: 2px solid black;
	cursor: pointer
  `

  // const consultarAPI = () => {
  //   const request = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const quote = request.then(resp =>  resp.json() );
  //   quote.then(result => console.log(result))
  // }


function App() {

  const [quote, setQuote] = useState({ })


  const consultarAPI = async () => {
    // const request = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const request = await fetch('https://breakingbadapi.com/api/quote/random');
    const response = await request.json();
    setQuote(response[0]);
  }
  useEffect(() => {
    setQuote(consultarAPI)
  },[setQuote])

  return (
    <>
    <Quote 
      quote={quote} />
    {/* <Button
      onClick={consultarAPI}>
      New quote
      </Button> */}
    </>
  );
}

export default App;
