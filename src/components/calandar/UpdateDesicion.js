import React, { useEffect, useState } from 'react'
import Sidebar from '../sideBar/Sidebar'
import Navbar from '../navBar/Navbar'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import './UpdateDesicion.css'
 
function UpdateDesicion() {
 const [users, setUsers] = useState([]);
  const [sujet, setSujet] = useState('');
  const [date, setDate] = useState();
   const [status, setStatus] = useState('');
   const [user, setUser] = useState('');
  const event=useParams();
  const getEvent= () => {
    axios.get('http://localhost:5000/api/desicion/getDesicion/'+event.id)
      .then(function (response) {
  
     setSujet(response.data.data.sujet)
     setStatus(response.data.data.status)
     setDate(response.data.data.date)
     

 
      })

  }
  const getAllUser = () => {
    axios.get('http://localhost:5000/api/user/getAll')
      .then(function (response) {
   
        setUsers(response.data.data);
      


      })

  }
  useEffect(() => {
    getAllUser()
    getEvent()


  }, [])
  const handleSubmit = e => {
    e.preventDefault();
    console.log(event);
      
    axios.put('http://localhost:5000/api/desicion/updateDesicion/'+event.id,
     {
      responsable: user,
      status:status,
        date:date,
        sujet:sujet
      })
      .then(function (response) {
        toast.success('Décision modifié avec success')
         
        
      })
      .catch(function (error) {
        
        console.log(error);
      });
  
  };
  return (
    <div> <div>
    <Sidebar/>
  <section class="home-section">
   
<Navbar/>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
<div class="home-content">
<section class="containerUPDesic">
              <header>Modifier Désicion</header>
              <form   onSubmit={handleSubmit}  class="formDes">

                <div className='inputs'>
                  <input value={sujet}  onChange={e => setSujet(e.target.value)} className='input-Desic sujet' type='text' placeholder='sujet' />

                </div>
                <div className='inputs multipls'>
                  <div className='responsable'>
                    <select className='input-Desic' value={user}  onChange={e => setUser(e.target.value)}  >
                      { users.map((option) => (
                        <option value={option._id}>{option.nom} {option.prenom}</option>
                      ))}
                    </select>
                  </div>
                  <div className='date'>
                    <input value={date}  onChange={e => setDate(e.target.value)} className='input-Desic' type='date' placeholder='' />
                  </div>
                  <div className='status'>
                  <select className='input-Desic' value={status}  onChange={e => setStatus(e.target.value)}  >
                       <option value='Pas encore'>Pas encore</option>
                       <option value='Pas encore'>En cours</option>
                       <option value='Effectué avec succès'>Effectué avec succès</option>
                    </select>
                  </div>

                </div>
                <button className='submit-desicion'>Ajouter</button>





              </form>
</section>
</div>
</section>
</div>
</div>
  )
}

export default UpdateDesicion