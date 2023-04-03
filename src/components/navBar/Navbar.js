import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div> <nav>
    <div class="sidebar-button">
      <i class='bx bx-menu sidebarBtn'></i>
      <span class="dashboard">Dashboard</span>
    </div>
    <div class="search-box">
      <input type="text" placeholder="Search..."/>
      <i class='bx bx-search' ></i>
    </div>
    <div class="profile-details">
      <img src="images/profile.jpg" alt=""/>
      <span class="admin_name">Prem Shahi <span className='role'>test</span></span><br/>
     
      
    </div>
  </nav></div>
  )
}

export default Navbar