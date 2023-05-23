import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sideBar/Sidebar'
import Navbar from '../../../components/navBar/Navbar'
import CalendarC from '../../../components/calandar/CalenderC'
 import './Event.css'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
function Event() {
  const [role,setRole]=useState('')
  
  useEffect(() => {
    const token=localStorage.getItem('token');
       
      setRole(jwt_decode(token).role);
    
      
  
  },[])
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
 {role=='Unite' ?
 <Link className='button-event' to="/addEvents">Ajouter Evenement</Link>:<p></p>}

    <CalendarC/>
    </div>
  </section>
  </div>
  )
}

export default Event