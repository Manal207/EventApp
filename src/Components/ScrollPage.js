import React from 'react'
import { useNavigate } from 'react-router-dom'
import UpIcon from '../Icons/Up.svg'
import DownIcon from '../Icons/Down.svg'

const ScrollPage = ({ event, goToNextEvent, goToPreviousEvent }) => {

  const navigate= useNavigate();

  const onClick=()=>{
    navigate('/EventDetailsMobile', { state: { event } });
  }


  // Inside your component
React.useEffect(() => {
  const video = document.querySelector('video');

  if (video) {
    video.play().catch(error => console.error("Video play failed.", error));
  }
}, []);

  return (
    <div className='scrollPage'>
      <div className='videoFrame'>
        {/* <img src={event.imageUrl} alt={event.name} style={{ width: '100%'}} /> */}
        <video 
          src={event.videoUrl} 
          alt={event.name} 
          style={{ width: '100%', height: 'auto' }} 
          autoplay 
          playsInline
          muted
          loop
          controls
        />
        <div className='video-content'>
          <h1>{event.name}</h1>
          <p>Join us for an unforgettable night at Pita Pit</p>
          <p onClick={onClick}>See more</p>

        </div>
      </div>
      <div className='up-and-down-icons'>
        <img src={UpIcon} alt="Up" onClick={goToPreviousEvent}/>
        <img src={DownIcon} alt="Down" onClick={goToNextEvent}/>
      </div>
    </div>
  )
}

export default ScrollPage
