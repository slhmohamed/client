import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sideBar/Sidebar'
import Navbar from '../../../components/navBar/Navbar'
import './ListeDesicion.css'
import axios from 'axios'
import { format } from 'date-fns';
import jwt_decode from 'jwt-decode'
import ModalDesicion from '../../../components/desicionModal/ModalDesicion'
import { Toaster, toast } from 'react-hot-toast'
function ListeDesicion() {
    const [role, setRole] = useState('')
    const [desicions, setDesicion] = useState([])
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');

        setRole(jwt_decode(token).role);
        getAllDesicion()
    }, [])
    const getAllDesicion = () => {
        axios.get('http://localhost:5000/api/desicion/getAll')
            .then((response) => {
                setDesicion(response.data.data)
            })
    }
    const getDesicions = (param) => () => {
        axios.get('http://localhost:5000/api/desicion/getDesicions/' + param)
            .then((response) => {
                setDesicion(response.data.data)
            })
    }

    const formatD = (date) => {
        console.log(new Date(date));
        return format(new Date(date), 'yyyy/MM/dd');
    }
    const etat = (date) => {
        console.log(new Date(Date.now()).getDate(), new Date(Date.now()).getMonth() + 1);
        console.log(new Date(date).getDate(), new Date(date).getMonth() + 1);
        var d1 = new Date();
        var d2 = new Date(date);

        if ((new Date(Date.now()).getMonth() + 1 > new Date(date).getMonth() + 1)) {
            // console.log(dateDiff(d1, d2).day) 
            return <span className='ptemp'> Il n'y a plus de temps</span>
        } else if ((new Date(Date.now()).getDate() >= new Date(date).getDate())) {
            // console.log(dateDiff(d1, d2).day) 
            return <span className='ptemp'> Il n'y a plus de temps</span>


        } else {
            var diff = new Date(date).getDate() - new Date(Date.now()).getDate()
            return <span className='temp'>Vous avez encore {diff}  jours</span>
        }
    }
    const handleChange = (e, param1) => {
        console.log(e.target.value);
        console.log(param1);

        axios.put('http://localhost:5000/api/desicion/updateStatus/' + param1,
            {
                value: e.target.value,



            })
            .then(function (response) {


                toast.success('Desicion status modifié avec succès');
                getAllDesicion()
            })
            .catch(function (error) {
                console.log(error.response.data.errors.message);
            });

    }
    return (
        <div>

            <Sidebar />
            <section class="home-section">

                <Navbar />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div class="home-content">
                    <div className='navigation'>
                        <i >
                            <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Liste des désicions
                        </i>
                    </div>
                    {role == 'Unite' ?
                        <button className='ajoutDesi addDes' onClick={() => {
                            setModalOpen(true);


                        }}>Ajouter desicion</button> : <p></p>}
                    <div className='headere-ld'>

                        <h2 className='title-ld'>Liste des désicions </h2>

                        <button onClick={getDesicions('Tous')} className='b-ld t'>Tous</button>
                        <button onClick={getDesicions('Pas encore')} className='b-ld pe'>Pas encore</button>
                        <button onClick={getDesicions('Encours')} className='b-ld e'>Encours</button>
                        <button onClick={getDesicions('Effectué avec succès')} className='b-ld eas'>Effectué avec succé</button>

                    </div>
                    {desicions?.length
                        ?
                        <div class="containerU">




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

                                                        {role == 'Unite' ? <td>

                                                            <select className='input-Desic' value={el.status} onChange={event => handleChange(event, el._id)} >

                                                                <option value="En cours">En cours </option>
                                                                <option value="Pas encore">Pas encore </option>
                                                                <option value="Termine">Termine </option>

                                                            </select>
                                                        </td> : <td>{el.status}</td>
                                                        }
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


            {modalOpen && <ModalDesicion setOpenModal={setModalOpen} getAll={getAllDesicion} />}

        </div>

    )
}

export default ListeDesicion