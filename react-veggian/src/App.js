import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import Foodinfo from "./components/Foodinfo";


function App() {

  const [search, setSearch ] = useState('')
  const [food_info, setFoodinfo] = useState({})
  

  useEffect(() => {
    const fetchAPI = async ()  => {
    if (search === '' ) return;


    const url = `https://world.openfoodfacts.org/api/v0/product/${search}.json`

    const response = await fetch(url)
    const data = await response.json()

    setFoodinfo(data)

  }
  fetchAPI()
}, [search])


  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center">
      <Row className="w-75">
        <Col>
        <NavBar   setSearch={setSearch}/>
        </Col>
      </Row>
      <Row className='w-75'>
        <Col>
        { Object.keys(food_info).length === 0 ?
        <Jumbotron />
        :
        <Foodinfo food_info={food_info} />
        }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
