import React, { useState } from 'react';
import Error from './Error';

const Searchbar = ({setSearch}) => {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(false);	


	const searchImages = e => {
		e.preventDefault();

		// Validate
		if(query === ''){
			setError(true);
			return;
		}
		setError(false);

		// Send info to principal component
		setSearch(query);


	}

	return (
          <div className="row d-flex justify-content-center">
			  {error
			  ? <Error message='Oh Snap! Write something in the box and try again.' />
				: null
			  }
            <form 
				onSubmit={ searchImages}
				className="d-flex m-auto col-sm-12 col-lg-8 col-xl-8"
				>
              <input 
			  	onChange={ e => setQuery(e.target.value) }
			  	className="form-control" 
				type="search"
				placeholder="Search" 
				aria-label="Search" />
              <button 
			   	className="btn btn-outline-success m-1 my-2 my-sm-0" 
				type="submit">
				Search
			  </button>
            </form>
          </div>
	)
}
export default Searchbar


