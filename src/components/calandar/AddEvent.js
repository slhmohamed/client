import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
 import './AddEvent.css'

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
 
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

//schema to validate event inputs 
 



const AddEvent = ( ) => {
  const [title,setTitle]=useState('')
  const [start,setStart]=useState('')
  const [end,setEnd]=useState('')
  const [describe,setDescribe]=useState('')
  const [errorMessage,setError]=useState('')
     const navigate = useNavigate()
      
    
    //using form-hook to register event data
    
   
    const handleSubmit = e => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/event/saveEvent',
      {
        title:title,
        start:start,
        end:end,
        describe:describe,
       

       })
       .then(function (response) {
         console.log(response);
        
         toast.success('Evenement ajouté avec succès');  
       })
       .catch(function (error) {
        setError('Échec de la validation de l\'événement : fin : La fin de l\'événement doit précéder d\'au moins une heure l\'heure de l\'événement.')
         console.log(error.response.data.errors.message);
       });
     
        
       }


  return (
    
   
  <div className="body">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
     <section class="containerE">
      <header>Nouveau Evenement</header>
      {errorMessage && ( 
                        <p className="error"> <i class='bx bx-error'></i> {errorMessage} </p>
                    )}
      <form onSubmit={handleSubmit} className="formAE">
        <div class="input-box">
          <label>Titre</label>
          <input type="text" value={title}  onChange={e => setTitle(e.target.value)} placeholder="Enter Titre" required />
        </div>

        <div class="input-box">
          <label>Description</label>
          <input type="text" value={describe}  onChange={e => setDescribe(e.target.value)} placeholder="Enter Description" required />
        </div>

        <div class="column">
          <div class="input-box">
            <label>Date début</label>
            <DatePicker
          placeholderText="Select start date"
          onChange={(date) => setStart(date)}
          selected={start}
          value={start}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          className="form-control"
          id="start"
        />
          </div>
          <div class="input-box">
            <label>Date fin</label>
            <DatePicker
        placeholderText="Select end date"
        onChange={(date) => setEnd(date)}
        selected={end}
        value={end}
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
        className="form-control"
        id="end"
        
      />
          </div>
        </div>
       
        
        <button type="submit" className="button-submitE">Ajouter</button>
      </form>
    </section>
  </div>
  )
}


 
 


export default AddEvent