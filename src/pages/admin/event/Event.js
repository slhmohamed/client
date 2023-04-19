import React from 'react'
import Sidebar from '../../../components/sideBar/Sidebar'
import Navbar from '../../../components/navBar/Navbar'
import CalendarC from '../../../components/calandar/CalenderC'
 import './Event.css'
import { Link } from 'react-router-dom'

function Event() {
  return (
    
    <div>
    <Sidebar/>
  <section class="home-section">
   
<Navbar/>
    <div class="home-content">
 <div className='navigation'>
  <i >
  <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Events
  </i>
 </div>
 <Link className='button-event' to="/addEvents">Ajouter Evenement</Link>

    <CalendarC/>
    </div>
  </section>
  </div>
  )
}

export default Event