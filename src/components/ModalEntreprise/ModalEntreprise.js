import React ,{useState}from 'react'
import './ModalEntreprise.css'
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function ModalEntreprise({ setOpenModal }) {
  const [form, setForm] = useState({});
  
   
   

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
 
    axios.post('http://localhost:5000/api/entreprise/addEntreprise',form)
      .then(function (response) {
        console.log(response);
        setOpenModal(false);
        toast.success('Entreprise ajouté avec succès');  
      })
      .catch(function (error) {
       
        console.log(error);
      });
    
  
  };
  return (
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
        </div>
        <section class="containerAET">
    <header>Nouveau entreprise</header>
    <form onSubmit={handleSubmit} class="formAET">
      <div class="input-boxAET">
        <label>Nom d'entreprise</label>
        <input name='nom' onChange={onChangeHandler} value={form.nom} type="text" placeholder="Nom d'entreprise" required />
      </div>

    
      <div class="columnAET">
        <div class="input-boxAET">
          <label>PDG</label>
          <input name='pdg' onChange={onChangeHandler} value={form.pdg} type="text" placeholder="Télephone" required />
        </div>
        <div class="input-boxAET">
          <label>Email</label>
          <input name="email" onChange={onChangeHandler} value={form.email} type="email" placeholder="Adresse" required />
        </div>
      </div>

      <div class="columnAET">
        <div class="input-boxAET">
          <label>Télephone</label>
          <input name='telephone' onChange={onChangeHandler} value={form.telephone} type="text" placeholder="Télephone" required />
        </div>
        <div class="input-boxAET">
          <label>Adresse</label>
          <input name='adresse' onChange={onChangeHandler} value={form.adresse} type="text" placeholder="Adresse" required />
        </div>
      </div>
       
      
      <button type='submit'>Ajouter</button>
    </form>
  </section>
  </div>
  </div></div>
  )
}

export default ModalEntreprise