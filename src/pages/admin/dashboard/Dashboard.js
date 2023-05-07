import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import Navbar from './../../../components/navBar/Navbar';
import Sidebar from '../../../components/sideBar/Sidebar';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
 
import { Bar,Line } from "react-chartjs-2";
import axios from 'axios';

function Dashboard() {

  const [user,setUser]=useState(0);
  const [company,setCompany]=useState(0);
  const [event,setEvent]=useState(0);
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
 const[chart,setChart]=useState([])

useEffect(()=>{
  axios.get('http://localhost:5000/api/stat/chart')
  .then((response) => {
    console.log(response);
 
   
 setChart(response.data.data)
   

  })
  
 

   
  axios.get('http://localhost:5000/api/stat/getStats')
            .then((response) => {
              setEvent(response.data.event);
              setCompany(response.data.entreprise)
              setUser(response.data.user)
 
            })
            
},[])
var data = {
  labels: labels,
  datasets: [
    {
      label: "Nombre des evénement",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: chart.map(x=>x),
    },
  ],
};
  return (
    <div>
      <Sidebar />
      <section class="home-section">

        <Navbar />
        <div class="home-content">
        <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Utilisateurs</div>
            <div class="number">{user}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Nombre d'utilisateurs</span>
            </div>
          </div>
          <i class='bx bx-cart-alt cart'></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Entreprises</div>
            <div class="number">{company}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Nombre d'entreprises</span>
            </div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Evenements</div>
            <div class="number">{event}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Nombre d'évenements</span>
            </div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
       
      </div>


      <div className='pieD'>
      <Bar data={data} />
      <Line data={data} />
    </div>
        </div>
      </section>
    
    </div>
  )
}

export default Dashboard