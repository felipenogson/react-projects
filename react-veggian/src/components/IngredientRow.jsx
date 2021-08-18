import React from 'react'

const IngredientRow = ({ingredient}) => {

  const my_classes = () => {
    if ( ingredient.vegan === 'yes' && ingredient.vegetarian === 'yes') return 'table-success';
  }
	return (
		<tr className={`table-active ${my_classes()}`}>
			<th scope="row">{ingredient.text}</th>
			<td>{ingredient.vegan}</td>
			<td>{ingredient.vegetarian}</td>
		</tr>
	)
}

export default IngredientRow
