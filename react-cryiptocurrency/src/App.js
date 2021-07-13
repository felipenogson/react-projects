import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Formulario from './components/Formulario';

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
  color: #fff;
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
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
