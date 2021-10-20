import React from 'react'
import { useState } from 'react';
import { Button, Table } from "react-bootstrap";
import Error from './Error';
import IngredientRow from './IngredientRow';

const Foodinfo = ({food_info}) => {

  const [error, setError] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const evaluateError = () => {
    if( food_info.status_verbose === "product not found"){
      setError(true);
      setErrorTitle('Product not found');
      setErrorMessage("Sorry, we can't find a product with that code");
  }
    
		setIngredients(food_info.product.ingredients)
	}
  // evaluateError();


	return (
		<div className="mt-2 mb-4 rounded-3">
		  <div className="container-fluid py-5 ">
        { (true) ?
        <Error title={errorTitle} message={errorMessage} />
          :
		    <div className="product_info">
		      {/* <img src={food_info.product.image_front_small_url} className="float-start"
		        alt={food_info.product.product_name} /> */}
		      <h2>{food_info.product.generic_name}</h2>
		      <p>{food_info.product.product_name_en}</p>
		      <Table>
		        <thead>
		          <tr>
		            <th scope="col">Name</th>
		            <th scope="col">Vegan</th>
		            <th scope="col">Vegetarian</th>
		          </tr>
		        </thead>
		        <tbody>
              { ingredients.map((ingredient) => (<IngredientRow ingredient={ingredient} key={ingredient.id} /> )) }
		        </tbody>
		      </Table>
		    </div>
        }
		  </div>
		</div>
	)
}

export default Foodinfo
