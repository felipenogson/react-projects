import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({setCategory}) => {

	const OPTIONS = [
		{ value : 'general', label : 'General'},
		{ value : 'business', label : 'Business'},
		{ value : 'sports', label : 'Sports'},
		{ value : 'science', label : 'Science'},
		{ value : 'technology', label : 'Technology'},
		{ value : 'entertainment', label : 'Entertainment'},
		{ value : 'health', label : 'Health'},
	];
	
	const [category, SelectNews] = useSelect('general', OPTIONS)

	// submit a form and send it to the app
	const searchNews = e => {
		e.preventDefault();

		console.log(category);
		setCategory(category);
		
	}

	return (
		<div className={`${styles.searchbox} row`}>
			<div className="col s12 m8 offset-m2">
				<form
					onSubmit={searchNews}>
					<h2 className={styles.heading}>Find news by category</h2>

					<SelectNews />

					<div className="input-field col s12">
						<input 
							type="submit" 
							className={`${styles.btn_block } btn-large amber darken-2`}
							value="Search"
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

Form.propTypes = {
	setCategory: PropTypes.func.isRequired
}

export default Form
