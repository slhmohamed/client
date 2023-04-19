import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../components/sideBar/Sidebar'
import Navbar from '../../../../components/navBar/Navbar'
import './listeEntreprise.css'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Modal from '../../../../components/Modal/Modal'
import ModalEntreprise from '../../../../components/ModalEntreprise/ModalEntreprise'
function ListeEntreprise() {
  const [entreprises,setEntreprise]=useState([])
  const [key,setKey]=useState([])
  const [modalOpen, setModalOpen] = useState(false);
 


 const  getAllEntreprise =()=>{
    axios.get('http://localhost:5000/api/entreprise/getAll')
     .then(function (response) {
       console.log(response);
       setEntreprise(response.data.data)
      
     
     })
      
  }
  useEffect(() => {
    getAllEntreprise()
      
  
  },[entreprises])

  const searchHandle= e => {
    e.preventDefault();
    axios.get('http://localhost:5000/api/user/searchUser/'+key)
      .then(function (response) {
        console.log(response);
        setEntreprise(response.data.data)
       
      })
      .catch(function (error) {
        console.log(error);
      });
  
  };
  const deleteEntreprise  = (id)=>{
     
 console.log(id);
    
    axios.delete('http://localhost:5000/api/entreprise/deleteEntreprise/'+id)
      .then(function (response) {
 
        this.getAllEntreprise();
        toast.success('Entreprise a éte supprimé');  
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    
    <div>
    <Sidebar/>
  <section class="home-section">
   
<Navbar/>

    <div class="home-content">
    <div className='navigation'>
  <i >
  <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Liste d'entreprise
  </i>
 </div>
 
    <h2>Liste des entreprises  </h2>
  <div className='buttons'>
    <div className='searchs'>
      <form onSubmit={searchHandle} className='form-search'>
    <input type='text' className='search' placeholder='Rechercher' value={key}  onChange={e => setKey(e.target.value)}/>
    <button className='bSearch' type='submit'  ><i class='bx bx-search-alt-2 icon'></i></button>
    </form>
    </div>
    <button     onClick={() => {
          setModalOpen(true);
          
        }} className='ajout'>Ajouter entreprise</button>

  </div>
<div class="containerLE">

	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Nom</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">PDG</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Email</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Télephone</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Adresse</a></div>
      <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Action</a></div>

		</div>
		<div class="table-content">	

    {
 entreprises && entreprises.map((entreprise, i) => {
 return (
			<div class="table-row">		
				<div class="table-data">{entreprise.nom}</div>
				<div class="table-data">{entreprise.pdg}</div>
				<div class="table-data">{entreprise.email}</div>
				<div class="table-data">{entreprise.telephone}</div>
				<div class="table-data">{entreprise.adresse}</div>
        <div class="table-data"><i  onClick={() => deleteEntreprise(entreprise._id)} class='bx bxs-trash'></i></div>
			</div>
 )
} 
)
}
	  
		</div>	
	</div>
</div>
    </div>
  </section>
  {modalOpen && <ModalEntreprise setOpenModal={setModalOpen} />}
  </div>
  )
}

export default ListeEntreprise