import React from 'react'

const ScrollPage = ({onAclick}) => {
  return (
    <div className='scrollPage'>
      <div className='videoFrame'>
        <div className='video-content'>
          <h1>Pita Pit Event</h1>
          <p>Join us for an unforgettable night at Pita Pit</p>
          <p onClick={onAclick}>See more</p>

        </div>
      </div>
    </div>
  )
}

export default ScrollPage
