const LocationInfoBox = ({info, onClose}) => {
	return (
		<div className="location-info" onClick={() => onClose()}>
			<h2>Event Location Info</h2>
            <ul>
                <li key={"id"+info.id} >ID: <strong>{info.id}</strong></li>
                <li key={info.id} >Title: <strong>{info.title}</strong></li>
            </ul>
			
		</div>
	)
}
export default LocationInfoBox
