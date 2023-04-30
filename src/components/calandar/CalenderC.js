import React , { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Popping from './Popping';
import axios from 'axios';
import './CalanderC.css'
 
 
 
const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})





const CalendarC = ({event, ShowEventApi, closeEvent, ShowEventApis}) => {
    const [open, setOpen] = useState(false);
    const [renderStatus, rerender] = useState(false);
    const [events,setEvents]=useState([])

    const [eventS,setEventS]=useState({})

    useEffect(()=>{
      ShowEventsApi()
       
    },[events]) 
   
 const ShowEventsApi =()=>{
  axios.get('http://localhost:5000/api/event/getAll')
  .then(function (response) {
    const convertedDates =  response.data.data.map(evt=>{
      return{
        title: evt.title,
        start: new Date(evt.start) ,
        end: new Date(evt.end) ,
        id: evt._id,
        describe: evt.describe
      }
    })
    console.log(convertedDates);
    setEvents(convertedDates)
 
  
  })
 }
 const openEventClick = (event)=>{
  console.log(event);
  setOpen(true)
   setEventS(event)
  return;
}

const closeEventClick = () =>{
setOpen(false);
 
}
    
    return (
    <div>
        <Popping
          open={open}
         handleOpen={openEventClick} 
         handleClose={closeEventClick} 
         renderStatus = {renderStatus} 
         rerender= {rerender}
         event={eventS}/>
       
        <Calendar
            localizer={localizer}
            events={events}
         
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 , margin: 50, fontFamily: 'Patrick Hand' }}
            onSelectEvent={openEventClick}

            
        />
    </div>
        
    )
}

 

export default CalendarC