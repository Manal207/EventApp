import React from 'react'
import { useState } from 'react'
import ScrollPage from './ScrollPage'
import EventDetails from './EventDetails'
import eventsData from '../Data/events.json';
import { useEffect } from 'react';
import '../Style/VideoFeed.css'


const VideoFeed = () => {

  const [events, setEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    // In a real app, you might fetch this data from a server
    setEvents(eventsData);
      // fetch("http://localhost:8080/api/events/") // Update this URL to the endpoint where your Django API serves the event data
      // .then(response => response.json())
      // .then(data => {
      //   setEvents(data);
      // })
      // .catch(error => {
      //   console.error('Error fetching data: ', error);
      // });
  }, []);

  const goToNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const goToPreviousEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

 
  return (
    <div className='videoFeed'>
       {events.length > 0 && (
        <>
          <ScrollPage
            event={events[currentEventIndex]}
            goToNextEvent={goToNextEvent}
            goToPreviousEvent={goToPreviousEvent}
          />
          <EventDetails event={events[currentEventIndex]} />
        </>
      )}
    </div>
  )
}
export default VideoFeed