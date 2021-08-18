import React from 'react'
import { Button, Table } from "react-bootstrap";
import IngredientRow from './IngredientRow';

const Foodinfo = ({food_info}) => {

	var ingredients = ''
	if( food_info.status_verbose === "product found"){
		ingredients = food_info.product.ingredients
	}

	return (
		<div className="mt-2 mb-4 rounded-3">
		  <div className="container-fluid py-5 ">
        { (food_info.status_verbose === "product found") ?
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
        :
        <div> Error </div>
        }
		  </div>
		</div>
	)
}

export default Foodinfo
