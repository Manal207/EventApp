import React from 'react'
import ScrollPage from './ScrollPage'
import EventDetails from './EventDetails'
import '../Style/VideoFeed.css'

const VideoFeed = () => {
  return (
    <div className='videoFeed'>
      <ScrollPage/>
      <EventDetails/>
    </div>
  )
}

export default VideoFeed
