import React, { useEffect, useState } from 'react'
import './ModalDesicion.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function ModalDesicion({ setOpenModal }) {
  const [users, setUsers] = useState([]);
  const [sujet, setSujet] = useState('')
  const [date, setDate] = useState('')
  const [user, setUser] = useState('')
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
        event:event.id,
        date:date,
        sujet:sujet
      })
      .then(function (response) {
        toast.success('Decision ajouté avec success')
         
        
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

                <div className='inputs'>
                  <input value={sujet}  onChange={e => setSujet(e.target.value)} className='input-Desic sujet' type='text' placeholder='sujet' />

                </div>
                <div className='inputs multipls'>
                  <div className='responsable'>
                    <select className='input-Desic' value={user}  onChange={e => setUser(e.target.value)}  >
                      {users.map((option) => (
                        <option value={option._id}>{option.nom} {option.prenom}</option>
                      ))}
                    </select>
                  </div>
                  <div className='date'>
                    <input value={date}  onChange={e => setDate(e.target.value)} className='input-Desic' type='date' placeholder='' />
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