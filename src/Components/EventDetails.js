import React from 'react'
import locationIcon from '../Icons/Vector.svg'
import dateIcon from '../Icons/date.svg'
import timeIcon from '../Icons/time.svg'
import peopleIcon from '../Icons/peoplee.svg'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Marker = ({ lat, lng }) => {
  const handleClick = () => {
    // Construct the Google Maps URL for directions
    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${lat},${lng}`;
    // Open the URL in a new tab
    window.open(googleMapsDirectionsUrl, '_blank');
  };

  return (
    <div className='icon-and-text' onClick={handleClick} style={{
      cursor: 'pointer',
      // Your custom marker styling
    }}>
      
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><div className='openItenary'>Open Iternary</div>
    </div>
  );
};



const EventDetails = ({event}) => {

  const staticLocation = {
    center: {
      lat: 33.4641442512065,
      lng: -88.81655637063872
    },
    zoom: 11
  };

  

  return (
    <div className="eventDetails">
      <h1>{event.name}</h1>
      <div className="eventInfo">
        <div className="infoBlock">
          <div className='iconAndText'><img src={locationIcon} alt="Location" /><p>Cotton District, Starkville</p></div>
          <div className='iconAndText'><img src={peopleIcon} alt="people" /><p>134 Participants</p></div>
        </div>
        <div className="infoBlock">
          <div className='iconAndText'><img src={dateIcon} alt="date" /><p>05/05/2024</p></div>
          <div className='iconAndText'><img src={timeIcon} alt="time" /><p>8PM-10PM</p></div>
        </div>
      </div>
      <button className="inviteButton">Invite your friend & get a 10% discount</button>
      <div className="aboutSection">
        <h2>About</h2>
        <p>Join us for an unforgettable evening at the Pita Pit Event...</p>
      </div>
      <div className="locationSection">
        <h2>Location</h2>
        <div className='iconAndText'><img src={locationIcon} alt="Location" /><p>Cotton District, Starkville</p></div>
        <div className='map' style={{ height: '250px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCu0lPeaEsHIvgXA8Tbzo0I-3PIQT-MdHM' }} // Replace with your Google Maps API key
            defaultCenter={staticLocation.center}
            defaultZoom={staticLocation.zoom}
          >
            
            <Marker
              lat={staticLocation.center.lat}
              lng={staticLocation.center.lng}
            />
            
          </GoogleMapReact>

        
        </div>
      </div>
    </div>
  )
}

export default EventDetails
