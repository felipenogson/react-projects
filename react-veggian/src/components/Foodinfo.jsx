import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Table} from 'react-bootstrap'
import IngredientRow from './IngredientRow'

const Foodinfo = ({food_info}) => {

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [ingredients, setIngredients] = useState([]);

	console.log(food_info)

	useEffect(() => {
		const handleError = () => {

			if (food_info.status === 0){
				setError(true)
				setErrorMessage("Oh Snap! Can't found that code, Sorry")
				return;
			} else if ( !("ingredients" in food_info.product)){
				setError(true);
				setErrorMessage("Oh Snap! Can't found ingredients for this product");
				return;

			}
			else {
				console.log('we are here')
				setIngredients(food_info.product.ingredients)
				setError(false)
			}
		}
		handleError()
	}, [food_info.status, food_info.product])

	console.log(error)


	return (

		<div className="mt-2 mb-4 rounded-3">
		  <div className="container-fluid py-5 ">
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
		  </div>
		</div>
	)
}

export default Foodinfo