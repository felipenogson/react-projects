import {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

	

const Formulario = ({setTransaction,setCreateTransaction}) => {

	// Definiendo los estados
	const [name, setName] = useState('')
	const [ammount, setAmmount] = useState(0);
	const [error, setError] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault()

		//Validar
		if(ammount < 1 || isNaN(ammount) || name.trim() === ''){
			setError(true);
			return;
		}
		setError(false);

		// Crear transaction
		const transaction = {
			name,
			ammount,
			id: shortid.generate(),
		}

		//  Agregar Transaccion al estado principal
		setTransaction(transaction)
		setCreateTransaction(true)

		setName('');
		setAmmount(0);
		}
	return (
		<form onSubmit={onSubmit}>
			<h2>Add expenses</h2>
			{ error ? 
			<Error message="Both fields are mandatory" />
			:
			null }
			<div className="campo">
				<label htmlFor="">Expense Name</label>
				<input type="text" 
				  className="u-full-width"
				  placeholder="Ex. Transport"
				  value={typeof(name) === 'string' ? name : ''}
				  onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label htmlFor="">Expense Ammount</label>
				<input type="number" 
				  className="u-full-width"
				  placeholder="Ex. 30"
				  value={ammount}
				  onChange={e =>  setAmmount(parseInt(e.target.value,10)) }
				  
				/>
			</div>
			<input type="submit" 
			className="button-primary"
			value="Add Expense"
			/>
		</form>
	)
}

Formulario.propTypes = {
	setTransaction: PropTypes.func.isRequired,
	setCreateTransaction: PropTypes.func.isRequired
}

export default Formulario
