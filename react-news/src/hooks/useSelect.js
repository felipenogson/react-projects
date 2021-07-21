import React, {useState} from 'react'


const useSelect = (initState, options) => {

	// Custom hook state
	const [state, setState] = useState(initState);

	const setSelection = () => (
		<select 
			className="browser-default" 
			value={state}
			onChange={ e => setState(e.target.value)}>
			{options.map( option => (
				<option key={option.value} value ={option.value} >{option.label}</option>
			))}
		</select>
	);

	return [state, setSelection ];
}

export default useSelect
