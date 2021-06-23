import Proptypes from 'prop-types';
const Appoiment = ({appoiment, deleteAppoiment}) => {
	return (
		<div className="cita">
			<p>🐶 Pet: <span>{appoiment.pet}</span></p>
			<p>Owner: <span>{appoiment.owner}</span></p>
			<p>Date: <span>{appoiment.date}</span></p>
			<p>Hour: <span>{appoiment.hour}</span></p>
			<p>Favorite Quote: <span>{appoiment.symptoms}</span></p>

			<button
				className="button eliminar u-full-width"
				onClick={() => (deleteAppoiment(appoiment.id))}>
					Delete
			</button>
			
		</div>
	)
}

Appoiment.propTypes = {
	appoiment : Proptypes.object.isRequired,
	deleteAppoiment : Proptypes.func.isRequired
}
export default Appoiment
