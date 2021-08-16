import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center">
      <Row className="w-75">
        <Col>
        <NavBar />
        </Col>
      </Row>
      <Row className='w-75'>
        <Col>
        <Jumbotron />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
