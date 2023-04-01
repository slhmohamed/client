import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div> 
        <div className="img"></div>
    <div className="center">
      <div className="title">Bienvenue</div>
      <div className="sub_title">Pure HTML & CSS Only</div>
      <div className="btns">
        <Link to="/login" className="href">S'inscrire</Link>
        
      </div>
    </div></div>
  )
}

export default Home