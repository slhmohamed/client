import React, { useEffect, useState } from 'react'
 
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import './PV.css'
import PV from './../calandar/PV';

function UpdatePV({ setOpenModal,getAll, pvId }) {
  
    const [sujet, setSujet] = useState('')
      const [rapport_file, setRapport_file] = useState(null)
    const [image_preview, setImage_preview] = useState('')
    const [id, setId] = useState('')
    const event=useParams();
     // Image Preview Handler
     const handleImagePreview = (e) => {
      let image_as_base64 = URL.createObjectURL(e.target.files[0])
      let rapport_as_files = e.target.files[0];
  
   
      setRapport_file(rapport_as_files)
      setImage_preview(image_as_base64)
    }
     
    useEffect(()=>{
 console.log(pvId);
 setId(pvId)
    })
    const handleSubmit = e => {
      e.preventDefault();
      
      
      let formData = new FormData();
      formData.append('rapportF', rapport_file);
     // formData.append('sujet', sujet);
       
       axios.put('http://localhost:5000/api/pv/updatePV/'+id,
       formData)
        .then(function (response) {
          toast.success('PV modifier avec success')
           setSujet('')
           setRapport_file('')
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
                <header>Modifier PV</header>
                <form   onSubmit={handleSubmit}  class="formDes">
  
                
                  <div className='inputs multipls pv-inputs'>
                  <label className='pv-label'>Rapport Finale</label>
  
                    <div className='responsable'>
                       <input  onChange={handleImagePreview} type='file'/>
                    </div>
                  </div>
                  <button className='submit-desicion'>Modifier</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
  
      </div>
    )
  }

export default UpdatePV