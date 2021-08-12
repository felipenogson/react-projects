import { useState, useEffect} from "react";
import Searchbar from "./components/Searchbar";
import ListImages from './components/ListImages';
import MenuBar from "./components/MenuBar";
import { Row, Pagination, Col } from "react-bootstrap";

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [total_pages, setTotal_pages] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      if (search === '') return;

      const page_items = 12;
      const key ='22805977-34b39e99ac73afc5daa914769';
      const url =`https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&per_page=${page_items}&page=${pagination}`
      
      const response = await fetch(url);
      const data = await response.json();

      setImages(data.hits);

      // Calculating total pages
      setTotal_pages(Math.ceil(data.totalHits/page_items));

      // Scroll to start
      const jumbotron = document.querySelector('#jumbotron');
      jumbotron.scrollIntoView({ behavior: "smooth"});

  }
  fetchApi();
}, [search, pagination])

// define previous page
const previousPage = () => {
  const new_previous_page = pagination-1;

  if(new_previous_page === 0) return;

  setPagination(new_previous_page);
}

const nextPage = () => {
  const new_next_page = pagination+1;

  if(new_next_page > total_pages) return;

  setPagination(new_next_page);
}


  return (

    <div className="container">
      <MenuBar />
      <div className="p-5 bg-light mt-5 rounded" id="jumbotron">
        <div className="container">
          <h1 className="display-3">React-Images</h1>
          <p className="lead">Image Search Engine</p>
          <Searchbar setSearch={setSearch} />
        </div>
      </div>
      <hr />

      <Row className="justify-content-center"  >
        <ListImages images={images} />
      </Row>
      <Row>
        <Col xl={12} className="d-flex justify-content-center">
          <Pagination>
            { (pagination === 1) ? null : (
            <Pagination.Prev onClick={previousPage}/>
            )}
            {( total_pages <= 1) ? null :(
            <Pagination.Item>{pagination}</Pagination.Item>
            ) }
            {(pagination === total_pages) ? null :(
            <Pagination.Next onClick={nextPage}/>
            )}
          </Pagination>
        </Col>
      </Row>
    </div>

  );
}

export default App;

