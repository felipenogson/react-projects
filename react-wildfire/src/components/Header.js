import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
const Header = () => {
	return (
		<header className='header'>
			<h1><Icon icon={locationIcon} className='location-icon'/>Wildfire Tracker (Powered by <a href="https://eonet.sci.gsfc.nasa.gov/docs/v2.1#eventsAPI">NASA</a>)</h1>
		</header>
	)
}

export default Header
