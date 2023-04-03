import React from 'react'
import './Dashboard.css';
import Navbar from './../../../components/navBar/Navbar';
import Sidebar from '../../../components/sideBar/Sidebar';
function Dashboard() {
  return (
    <div>
      <Sidebar />
      <section class="home-section">

        <Navbar />
        <div class="home-content">



        </div>
      </section>
    </div>
  )
}

export default Dashboard