import React from 'react'
import { useState } from 'react';
import { Table } from "react-bootstrap";
import IngredientRow from './IngredientRow';

const Foodinfo = ({food_info}) => {


	const [error, setError] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const [ingredients, setIngredients] = useState([]);


	if( food_info.status === 0){
		setError(true)
		console.log(error)
		setErrorMessage("Oh snap! The product can't be found");
	}else if (!('ingredients' in food_info.product)){
		setError(true)
		setErrorMessage("Oh snap! We don't have the ingredients for that product " )
	}else {
		setIngredients(food_info.product.ingredients)
	}

	return (
		<div className="mt-2 mb-4 rounded-3">
		<div> Hola </div>
		  {/* <div className="container-fluid py-5 ">
        { (error) ?
			<div> Error: { errorMessage } </div>
			:
		    <div className="product_info">
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
		  </div> */}
		</div>
	)
}

export default Foodinfo
