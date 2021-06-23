import { Fragment, useState } from 'react' ;
import {v4 as uuidv4 } from 'uuid';
import Proptypes from 'prop-types';

const Formulario = ({createAppoinment}) => {

	// Creacion de el estado para las citas
	const [appointment, setAppointment] = useState({
		pet: '',
		species: '',
		gender: '',
		owner: '',
		date: '',
		hour: '',
		quote:'', 
	});
	const [ error, setError] = useState(false)


	// Funcion que se ejecuta cuando el usuario escribe en un input
	const handleChange = (e) => {
		setAppointment({
			...appointment,[e.target.name]: e.target.value
		})
		console.log(e)
	}

	// Extraer los valores 
	const { pet, species, gender, owner, date, hour, quote} = appointment;

	// Cuando el usuario envia el formulario
	const submitAppointment = e => {
		e.preventDefault();
		// Validar
		if( pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || species === '' || gender === '' ){ 
			setError(true);
			return;
		}
		// Elimina el mensaje previo
		setError(false);

		// Asignar un ID
		appointment.id =uuidv4();

		//Crear la cita
		createAppoinment(appointment)


		// Reiniciar el formulario
		setAppointment({
			pet: '',
			owner: '',
			date: '',
			hour: '',
			symptoms:'', 
		})
	}

	return (
		<Fragment>
			<h2>Add a Birthday </h2>
			{error ? <p className='alerta-error'>All fields are required</p> : null}

		<form
		  onSubmit={submitAppointment}>
			<label>Pet's Name</label>
			<input type="text" 
				name="pet"
				className="u-full-width"
				placeholder="Name of the pet"
				onChange={handleChange}
				value={pet}
				autoComplete="off"
			/>
    <label>Select Species</label>
	<div className="u-full-width cat-or-dog">
    <label for="select_cat">
      <input type="radio" 
	    name="species" 
		id="select_cat" 
		onChange={handleChange}
		value= "cat"/>
      <span> Cat 😻</span>
    </label>
    <label for="select_dog">
      <input type="radio" 
	  	name="species" 
		id="select_dog" 
		onChange={handleChange}
		value="dog" />
      <span> Dog 🐶</span>
    </label>
    <label for="select_other">
      <input type="radio" 
	  	name="species" 
		id="select_other" 
		onChange={handleChange}
		value="other" />
      <span> Other 👽 </span>
    </label>
	</div>
			<label>Owner's Name</label>
			<input type="text" 
				name="owner"
				className="u-full-width"
				placeholder="Name of the owner"
				onChange={handleChange}
				value={owner}
				autoComplete="off"
			/>	
			<label>Date</label>
			<input type="date" 
				name="date"
				className="u-full-width"
				onChange={handleChange}
				value={date}
			/>
			<label>Hour</label>
			<input type="time" 
				name="hour"
				className="u-full-width"
				onChange={handleChange}
				value={hour}
			/>
			
			<label>Favorite Quote</label>
			<textarea 
			    name="quote"
			    className="u-full-width"
			    onChange={handleChange}
				value={quote}
			></textarea>
			<button
			  type="submit"
			  className="u-full-width button-primary">
				  Add a Birthday
			  </button>
		</form>
		</Fragment>
	)
}

Formulario.prototype = {
  createAppoinment : Proptypes.func.isRequired
}

export default Formulario
