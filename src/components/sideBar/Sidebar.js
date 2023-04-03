import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div>    <div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'></i>
      <span class="logo_name">CodingLab</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-box' ></i>
            <span class="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Order list</span>
          </a>
        </li>
     
    
         
     
        <li>
          <a href="#">
            <i class='bx bx-heart' ></i>
            <span class="links_name">Favrorites</span>
          </a>
        </li>
        <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: '0px',
            width: '201px'
        }}
    />
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Profile</span>
          </a>
        </li>
        <li  >
          <Link to="/listeEntreprise">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </Link>
        </li>
      </ul>
  </div></div>
  )
}

export default Sidebar