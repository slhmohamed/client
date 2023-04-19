import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

function Sidebar() {
  const navigate=useNavigate()
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login')

  }
  const [user,setUser]=useState('')
  const [role,setRole]=useState('')
  useEffect(()=>{
      const token=localStorage.getItem('token');
      console.log(jwt_decode(token).username);
      setUser(jwt_decode(token).username);
      setRole(jwt_decode(token).role);
       
  },[])
  return (
    <div>    <div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'></i>
      <span class="logo_name">CodingLab</span>
    </div>
    <div className='avatar'>
    <img className='imageA' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" alt="react logo"  />
    <h2 className='user'>{user}</h2>
    <h3 className='role'>{role}</h3>
    </div>
    <hr className='hr'
         
    />
      <ul class="nav-links">
        <li>
          <a href="#" >
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
        <Link to="/listeUtilisateur">
        <i class='bx bxs-user-detail'></i>
            <span class="links_name">Utilisateur</span>
       </Link>
        </li>
        <li>
          
        <Link to="/listeEntreprise">
        <i class='bx bxs-school'></i>
            <span class="links_name">Entreprise</span>
         </Link>
        </li>

        <li>
          
          <Link to="/events">
          <i class='bx bxs-school'></i>
              <span class="links_name">Evenement</span>
           </Link>
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
          <Link to="/profile">
          <i class='bx bx-user-circle'></i>
            <span class="links_name">Profile</span>
            </Link>
          </a>
        </li>
        <li  >
          <a  onClick={logout}>
            <i class='bx bx-log-out'></i>
            <span class="links_name">Déconnexion</span>
            </a>
        </li>
      </ul>
  </div></div>
  )
}

export default Sidebar