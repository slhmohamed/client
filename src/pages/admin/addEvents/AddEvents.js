import React from 'react'
import Sidebar from '../../../components/sideBar/Sidebar'
import Navbar from '../../../components/navBar/Navbar'
import CalendarC from '../../../components/calandar/CalenderC'
 import './AddEvent.css'
import { Link } from 'react-router-dom'
import AddEvent from './../../../components/calandar/AddEvent';

function AddEvents() {
  return (
    
    <div>
    <Sidebar/>
  <section class="home-section">
   
<Navbar/>
    <div class="home-content">
 <div className='navigation'>
  <i >
  <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i>Ajouter  Events
  </i>
 </div>
  

    <AddEvent/>
    </div>
  </section>
  </div>
  )
}

export default AddEvents