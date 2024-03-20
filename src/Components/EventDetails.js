import React from 'react'

const EventDetails = () => {
  return (
    <div className="eventDetails">
      <h1>Pita Pit Event</h1>
      <div className="eventInfo">
        <div className="infoBlock">
          <p>Cotton District, Starkville</p>
          <p>134 Participants</p>
        </div>
        <div className="infoBlock">
          <p>05/05/2024</p>
          <p>8PM-10PM</p>
        </div>
      </div>
      <button className="inviteButton">Invite your friend & get a 10% discount</button>
      <div className="aboutSection">
        <h2>About</h2>
        <p>Join us for an unforgettable evening at the Pita Pit Event...</p>
      </div>
      <div className="locationSection">
        <h2>Location</h2>
        <p>Cotton District, Starkville</p>
        <div className='map'></div>
      </div>
    </div>
  )
}

export default EventDetails
