import React from 'react'
import { useState } from 'react'
import ScrollPage from './ScrollPage'
import EventDetails from './EventDetails'
import '../Style/VideoFeed.css'


const VideoFeed = () => {

  // const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  // const [showEventDetails, setShowEventDetails] = useState(false);

  // const handleResize = () => {
  //   setIsMobileView(window.innerWidth < 768);
  // };

  // const handleComponentAClick = () => {
  //   if (isMobileView) {
  //     setShowEventDetails(true);
  //   }
  // };

  // // Attach event listener for resizing
  // React.useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

 
  return (
    <div className='videoFeed'>
      <ScrollPage/>
      <EventDetails/>
    </div>
  )
}

export default VideoFeed