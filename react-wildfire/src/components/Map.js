import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map( ev => {
        if (ev.categories[0].id === 8){
            return <LocationMarker key={Math.floor(Math.random() * 100000)} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({id: ev.id, title: ev.title})} />
        }
        return null
    })
const onClose = () => {
    setLocationInfo(null)
}
	return (
		<div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAQZqaQdWQ-DE8BVYw9ksLZ6TgflsczlzA'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} onClose={onClose}/>}
		</div>
	)
}

Map.defaultProps = {
    center: {
        lat: 32.253460,
        lng: -110.911789

    },
    zoom: 6
}
export default Map
