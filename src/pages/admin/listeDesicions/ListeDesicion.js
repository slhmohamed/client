import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sideBar/Sidebar'
import Navbar from '../../../components/navBar/Navbar'
import './ListeDesicion.css'
import axios from 'axios'
import { format } from 'date-fns'
import ModalDesicion from '../../../components/desicionModal/ModalDesicion'

function ListeDesicion() {
    const [desicions, setDesicion] = useState([])
    const [modalOpen, setModalOpen] = useState(false);

 
    useEffect(() => {
        axios.get('http://localhost:5000/api/desicion/getAll')
            .then((response) => {
                setDesicion(response.data.data)
            })
    }, [ ])

    const getDesicions=(param)=>()=>{
        axios.get('http://localhost:5000/api/desicion/getDesicions/'+param)
        .then((response) => {
            setDesicion(response.data.data)
        })
    }
    
    const formatD = (date) => {
        console.log(new Date(date));
        return format(new Date(date), 'yyyy/MM/dd');
    }
    const etat=(date)=>{
        console.log(new Date(Date.now()).getDate(),new Date(Date.now()).getMonth()+1);
       console.log( new Date(date).getDate(),new Date(date).getMonth()+1);
        var d1=new Date();
        var d2=new Date(date);
     
        if ((new Date(Date.now()).getMonth()+1 > new Date(date).getMonth()+1)){
           // console.log(dateDiff(d1, d2).day) 
           return <span className='ptemp'> Il n'y a plus de temps</span>
        }else  if ((new Date(Date.now()).getDate() >= new Date(date).getDate())){
          // console.log(dateDiff(d1, d2).day) 
          return <span className='ptemp'> Il n'y a plus de temps</span>
            
            
        }else {
            var diff= new Date(date).getDate()-new Date(Date.now()).getDate() 
            return <span className='temp'>Vous avez encore {diff}  jours</span>
        }
    }
    return (
        <div>

            <Sidebar />
            <section class="home-section">

                <Navbar />

                <div class="home-content">
                    <div className='navigation'>
                        <i >
                            <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Liste des désicions
                        </i>
                    </div>
                    {desicions?.length 
                        ?
                        <div class="containerU">
                            <button className='ajoutDesi'  onClick={() => {
                                setModalOpen(true);
           
           console.log("ok");
           
         }}>Ajouter desicion</button>
                            <div className='headere-ld'>
                            
                                <h2 className='title-ld'>Liste des désicions </h2>

                                <button onClick={getDesicions('Tous')} className='b-ld t'>Tous</button>
                                <button onClick={getDesicions('Pas encore')} className='b-ld pe'>Pas encore</button>
                                <button onClick={getDesicions('Encours')} className='b-ld e'>Encours</button>
                                <button onClick={getDesicions('Effectué avec succès')} className='b-ld eas'>Effectué avec succé</button>

                            </div>


                            <div>    <div class="wrapper-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sujet</th>
                                            <th> </th>
                                            <th>Date de lancement</th>
                                            <th>Seperviseur</th>
                                            <th>Date d'execution</th>
                                            <th>Etat d'avancement</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            desicions && desicions.map((el, i) => {
                                                return (
                                                    <tr>
                                                        <td>{el.sujet}</td>
                                                        <td>{etat(el.dateExecution)} </td>
                                                        <td>{formatD(el.dateLancement)} </td>
                                                        <td>{el.responsable?.nom} {el.responsable?.prenom}</td>
                                                         
                                                        <td>{formatD(el.dateExecution)} </td>
                                                        
                                                        <td>{el.status}</td>
                                                    </tr>
                                                )
                                            }
                                            )
                                        }




                                    </tbody>
                                </table>
                            </div>
                            </div>

                        </div>
                        : <span className='pasD'>Pas des eésicions</span>}
                </div>
            </section>


            {modalOpen && <ModalDesicion setOpenModal={setModalOpen} />}

        </div>

    )
}

export default ListeDesicion