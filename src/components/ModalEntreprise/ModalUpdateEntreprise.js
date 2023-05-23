import React ,{useEffect, useState}from 'react'
import './ModalEntreprise.css'
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function ModalUpdateEntreprise({ setUpdate,getAll,id }) {
    const [nom, setNom] = useState('')
    const [pdg, setPdg] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdrese] = useState('')
    const [telephone, setTelephone] = useState('')
  const [form, setForm] = useState({});
  
   
  useEffect(() => {
    axios.get('http://localhost:5000/api/entreprise/getSingle/'+id)
    .then(function (response) {
        console.log(response.data.data.nom);
        setNom(response.data.data.nom);
        setPdg(response.data.data.pdg)
        setAdrese(response.data.data.adresse)
        setEmail(response.data.data.email)
        setTelephone(response.data.data.telephone)
       
    })
    .catch(function (error) {
     
      console.log(error);
    });
  
}, [ ])

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    let data={
        nom:nom,
        adresse:adresse,
        telephone:telephone,
        pdg:pdg,
        email:email
    }
 
    axios.put('http://localhost:5000/api/entreprise/updateEntreprise/'+id,data)
      .then(function (response) {
        console.log(response);
        setUpdate(false);
        toast.success('Entreprise modifié avec succès');  
        getAll()
      })
      .catch(function (error) {
       
        console.log(error);
      });
    
  
  };
  return (
    <div className='modal'> 
     <Toaster 
  position="top-center"
  reverseOrder={false}
/>
           <div className="modalBackground">
         
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="close"
            onClick={() => {
                setUpdate(false);
            }}
          >
            X
          </button>
        </div>
        <section class="containerAET">
    <header>Update entreprise</header>
    <form onSubmit={handleSubmit} class="formAET">
      <div class="input-boxAET">
        <label>Nom d'entreprise</label>
        <input name='nom' value={nom}  onChange={e => setNom(e.target.value)} type="text" placeholder="Nom d'entreprise" required />
      </div>

    
      <div class="columnAET">
        <div class="input-boxAET">
          <label>PDG</label>
          <input name='pdg' value={pdg}  onChange={e => setPdg(e.target.value)} type="text" placeholder="Télephone" required />
        </div>
        <div class="input-boxAET">
          <label>Email</label>
          <input name="email" value={email}  onChange={e => setEmail(e.target.value)} type="email" placeholder="Adresse" required />
        </div>
      </div>

      <div class="columnAET">
        <div class="input-boxAET">
          <label>Télephone</label>
          <input name='telephone' value={telephone}  onChange={e => setTelephone(e.target.value)} type="text" placeholder="Télephone" required />
        </div>
        <div class="input-boxAET">
          <label>Adresse</label>
          <input name='adresse' value={adresse}  onChange={e => setAdrese(e.target.value)} type="text" placeholder="Adresse" required />
        </div>
      </div>
       
      
      <button type='submit'>Modifier</button>
    </form>
  </section>
  </div>
  </div></div>
  )
}

export default ModalUpdateEntreprise