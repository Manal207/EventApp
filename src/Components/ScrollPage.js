import React from 'react'
import { useNavigate } from 'react-router-dom'

const ScrollPage = ({onAclick}) => {

  const navigate= useNavigate();

  const onClick=()=>{
    navigate('/EventDetailsMobile')
  }
  return (
    <div className='scrollPage'>
      <div className='videoFrame'>
        <div className='video-content'>
          <h1>Pita Pit Event</h1>
          <p>Join us for an unforgettable night at Pita Pit</p>
          <p onClick={onClick}>See more</p>

        </div>
      </div>
    </div>
  )
}

export default ScrollPage
