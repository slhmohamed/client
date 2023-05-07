import React, { useEffect, useState } from 'react'
import './ModalDesicion.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function ModalDesicion({ setOpenModal,getAll }) {
  const [users, setUsers] = useState([]);
  const [sujet, setSujet] = useState('')
  const [dateE, setDateE] = useState('')
  const [user, setUser] = useState('')
  const [etat, setEtat] = useState('')
  const [dateL, setDateL] = useState('')

  const event=useParams()
  const getAllUser = () => {
    axios.get('http://localhost:5000/api/user/getAll')
      .then(function (response) {
        console.log(response);
        setUsers(response.data.data)
        console.log(users);

      })

  }
  useEffect(() => {
    getAllUser()


  }, [])
  const handleSubmit = e => {
    e.preventDefault();
    console.log(event);
      
    axios.post('http://localhost:5000/api/desicion/newDesicion',
     {
      responsable: user,
        dateLancement:dateL,
        dateExecution:dateE,
        status:etat,
        sujet:sujet
      })
      .then(function (response) {
        toast.success('Decision ajouté avec success');
        getAll()
         
        
      })
      .catch(function (error) {
        
        console.log(error);
      });
  
  };
  return (
    <div> 
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className='modal'>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button className="close"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
            <section class="containerDesic">
              <header>Ajouter Desicion</header>
              <form   onSubmit={handleSubmit}  class="formDes">
              <span className='details'>Sujet</span>
                <div className='inputs'>
             
                  <input value={sujet}  onChange={e => setSujet(e.target.value)} className='input-Desic sujet' type='text' placeholder='sujet' />

                </div>
                <div className='inputs multipls'>

                  <div className='responsable'>
                  <span className='details'>Seperviseur</span>
                    <select className='input-Desic' value={user}  onChange={e => setUser(e.target.value)}  >
                      {users.map((option) => (
                        <option value={option._id}>{option.nom} {option.prenom}</option>
                      ))}
                    </select>
                  </div>
 
                  <div className='date'>
                  <span className='details-date'>Date de lancement</span>
                    <input value={dateL}  onChange={e => setDateL(e.target.value)} className='input-Desic' type='date' placeholder='' />
                  </div>

                </div>
                <div className='inputs multipls'>
                  <div className='responsable'>
                  <span className='details'>Etat</span>
                    <select className='input-Desic' value={etat}  onChange={e => setEtat(e.target.value)}  >
                       
                        <option value="En cours">En cours </option>
                        <option value="Pas encore">Pas encore </option>
                        <option value="Termine">Termine </option>
                      
                    </select>
                  </div>
                  <div className='date dateEx'>
                  <span className='details-dateE'>Date d'exection</span>
                    <input value={dateE}  onChange={e => setDateE(e.target.value)} className='input-Desic' type='date' placeholder='' />
                  </div>

                </div>
                <button className='submit-desicion'>Ajouter</button>





              </form>
            </section>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ModalDesicion