import React from 'react'
import './Dashboard.css';
import Navbar from './../../../components/navBar/Navbar';
import Sidebar from '../../../components/sideBar/Sidebar';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
 
import { Bar,Line } from "react-chartjs-2";

function Dashboard() {
  const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
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
            <div class="number">40,876</div>
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
            <div class="number">38,876</div>
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
            <div class="number">$12,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Nombre d'évenements</span>
            </div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Aujourd'hui</div>
            <div class="number">11,086</div>
            <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Nombre d'évenements</span>
            </div>
          </div>
          <i class='bx bxs-cart-download cart four' ></i>
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