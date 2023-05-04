import React, { useEffect, useState } from 'react'
 
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
function ModalPV ({ setOpenModal }) {
  
  const [sujet, setSujet] = useState('')
  const [date, setDate] = useState('')
  const [user, setUser] = useState('')
  const [rapport_file, setRapport_file] = useState(null)
  const [image_preview, setImage_preview] = useState('')
  const event=useParams();
   // Image Preview Handler
   const handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0])
    let rapport_as_files = e.target.files[0];

 
    setRapport_file(rapport_as_files)
    setImage_preview(image_as_base64)
  }
   
  
  const handleSubmit = e => {
    e.preventDefault();
    
    let formData = new FormData();
    formData.append('rapport', rapport_file);
    formData.append('sujet', sujet);
     formData.append('event', event.id);
    axios.post('http://localhost:5000/api/pv/newPV',
     formData)
      .then(function (response) {
        toast.success('PV ajouté avec success')
         
        
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
              <header>Ajouter PV</header>
              <form   onSubmit={handleSubmit}  class="formDes">

                <div className='inputs'>
                  <input value={sujet}  onChange={e => setSujet(e.target.value)} className='input-Desic sujet' type='text' placeholder='sujet' />

                </div>
                <div className='inputs multipls'>
                  <div className='responsable'>
                     <input  onChange={handleImagePreview} type='file'/>
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

export default ModalPV