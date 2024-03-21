import React from 'react'
import locationIcon from '../Icons/Vector.svg'
import dateIcon from '../Icons/date.svg'
import timeIcon from '../Icons/time.svg'
import peopleIcon from '../Icons/peoplee.svg'


const EventDetails = () => {
  return (
    <div className="eventDetails">
      <h1>Pita Pit Event</h1>
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
        <div className='map'>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
