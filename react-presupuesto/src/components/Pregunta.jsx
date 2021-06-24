import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'


const Pregunta = ({ setBudget, setRemain, setShowQuestion}) => {
	// Define the state
	const [initialBudget, setInitialBudget] = useState(0);
	const [error, setError] = useState(false);

	// on submit
	const addBudget = (e) => {
		e.preventDefault()

		// Validate

		if(initialBudget < 1 || isNaN(initialBudget)){
			setError(true)
			return;
		}

		// If Validate is OK
		setError(false);
		setBudget(initialBudget);
		setRemain(initialBudget);
		setShowQuestion(false);


	}

	return (
		<Fragment>
			<h2>Initial Income</h2>
			{ error ? <Error message="The budget is not correct" /> : ''}
			<form onSubmit={addBudget}>
				<input 
				  type="text" 
				  className="u-full-width"
				  placeholder='Enter an Income'
				  onChange={ e => ( setInitialBudget(parseInt(e.target.value, 10)))}
				  />
				<input type="submit" 
				  className="button-primary u-full-width" 
				  value="Define Budget"
				  />
			</form>
		</Fragment>
	)
}

Pregunta.propTypes = {
	setShowQuestion: PropTypes.func.isRequired,
	setBudget: PropTypes.func.isRequired,
	setRemain: PropTypes.func.isRequired,
}


export default Pregunta
