import React, { useEffect, useState } from 'react'
import './Navbar.css'
import jwt_decode from 'jwt-decode'

function Navbar() {
  const [user,setUser]=useState('')
  const [role,setRole]=useState('')
  const [avatar,setAvatar]=useState('')
  useEffect(()=>{
      const token=localStorage.getItem('token');
      console.log(jwt_decode(token).username);
      setUser(jwt_decode(token).username);
      setRole(jwt_decode(token).role);
      setAvatar(jwt_decode(token).avatar)
       
  },[])
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
    {
                        avatar!='' ?  <img class="avatar border-gray" src={`http://localhost:5000/${avatar}`}   alt="..." />
                        : <p> <img class="avatar border-gray" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" alt="..." />
                        </p>
                    }    <span class="admin_name">{user}<span className='role'>{role}</span></span><br/>
     
      
    </div>
  </nav></div>
  )
}

export default Navbar