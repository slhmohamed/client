import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import Navbar from './../../../components/navBar/Navbar';
import Sidebar from '../../../components/sideBar/Sidebar';
import Chart from "chart.js/auto";
import jwt_decode from 'jwt-decode'

import { Bar, Line, Pie } from "react-chartjs-2";
import axios from 'axios';
import { format } from 'date-fns'

function Dashboard() {

  const [user, setUser] = useState(0);
  const [company, setCompany] = useState(0);
  const [event, setEvent] = useState(0);
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [chart, setChart] = useState([]);
  const [chartP, setChartP] = useState([])

  const [logs, setLog] = useState([])

  const [role, setRole] = useState('')
  const [desicion, setDesicion] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token');

    setRole(jwt_decode(token).role);

    getDesicions()
    axios.get('http://localhost:5000/api/stat/chart')
      .then((response) => {
        console.log(response);
        setChart(response.data.data)
        setChartP(response.data.chartP)
      })

    axios.get('http://localhost:5000/api/stat/getStats')
      .then((response) => {
        setEvent(response.data.event);
        setCompany(response.data.entreprise)
        setUser(response.data.user)

      })
    axios.get('http://localhost:5000/api/log/getAlllog')
      .then((response) => {
        console.log(response);
        setLog(response.data.data);


      })
  }, [])

  const getDesicions = () => {
    axios.get('http://localhost:5000/api/desicion/getAll')
      .then((response) => {
        setDesicion(response.data.data)
      })
  }

  const formatD = (date) => {
    console.log(new Date(date));
    return format(new Date(date), 'yyyy/MM/dd');
  }
  var data = {
    labels: labels,
    datasets: [
      {
        label: "Nombre des evénement",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0,0,255)",
        data: chartP.map(x => x),
      },
    ],
  };
  var dataP = {
    labels: ["Pas encore", "Termine", "En cours"],

    datasets: [
      {
        label: 'Nombre de desicion : ',
        data: [4, 5, 6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderWidth: 1,
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

          {
            role == 'Ministre' ?
              <div className='pieD'>
                <Bar data={data} />
                <Pie data={dataP} width={373} height={233}
                  options={{
                    title: {
                      display: true,
                      text: "Status de desicion",
                      fontSize: 15
                    }

                  }} /><br>
                </br>

              </div> : <p></p>}

          {role != 'Ministre'
            ?
            <div class="table__wrap">
              <table class="table">
                <thead class="table__header">

                  <tr class="table__row">
                    <th class="table__cell u-text-left">Sujet</th>
                    <th class="table__cell u-text-right">	Date de lancement</th>
                    <th class="table__cell u-text-right">Seperviseur</th>
                    <th class="table__cell u-text-right">Date d'execution</th>
                    <th>Etat d'avancement</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    desicion && desicion.map((el, i) => {
                      return (
                        <tr class="table__row">
                          <td class="table__account table__cell">{el.sujet}</td>

                          <td class="table__limit table__cell u-text-right u-font-center">{formatD(el.dateLancement)} </td>
                          <td class="table__limit table__cell u-text-right u-font-center">{el.responsable?.nom} {el.responsable?.prenom}</td>

                          <td class="table__limit table__cell u-text-right u-font-center">{formatD(el.dateExecution)} </td>

                          <td class="table__limit table__cell u-text-right u-font-center">{el.status}</td>
                        </tr>
                      )
                    }
                    )
                  }
                </tbody>
              </table>
            </div> : 
            <div class="table__wrap">
              <table class="table">
                <thead class="table__header">

                  <tr class="table__row">
                    <th class="table__cell u-text-left">Action</th>
                  
                    <th class="table__cell u-text-right">Date </th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    logs && logs.map((el, i) => {
                      return (
                        <tr class="table__row">
                          <td class="table__account table__cell left" >{el.action}</td>

                          <td class="table__limit table__cell u-text-right u-font-center">{formatD(el.createdAt)} </td>
                                        </tr>
                      )
                    }
                    )
                  }
                </tbody>
              </table>
            </div> 
             }

        </div>
      </section>

    </div>
  )
}

export default Dashboard