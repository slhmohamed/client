import React ,{ useEffect, useState }from 'react';
 
import "./ListeUser.css"
import Sidebar from '../../../../components/sideBar/Sidebar'
import Navbar from '../../../../components/navBar/Navbar'
import axios from 'axios';
function ListeUser() {
  const [users,setUsers]=useState([])
  const [key,setKey]=useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/user/getAll')
     .then(function (response) {
       console.log(response);
       setUsers(response.data.data)
       console.log(users);
     
     })
      
  
  },[])

  const searchHandle= e => {
    e.preventDefault();
    axios.get('http://localhost:5000/api/user/searchUser/'+key)
      .then(function (response) {
        console.log(response);
        setUsers(response.data.data)
       
      })
      .catch(function (error) {
        console.log(error);
      });
  
  };
  return (
    <div>
    <Sidebar/>
  <section class="home-section">
   
    <Navbar/>
    <div class="home-content">
 

    <div class="container">
  <h2>Liste des utilsateurs  </h2>
  <div className='buttons'>
    <div className='searchs'>
      <form onSubmit={searchHandle}>
    <input type='text' className='search' placeholder='Rechercher' value={key}  onChange={e => setKey(e.target.value)}/>
    <button className='bSearch' type='submit'  ><i class='bx bx-search-alt-2 icon'></i></button>
    </form>
    </div>
    <button type='submit'  onclick="searchHandle()" className='ajout'>Ajouter utilisateurs</button>

  </div>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Nom</div>
      <div class="col col-2">Prenom</div>
      <div class="col col-3">Email</div>
      <div class="col col-4">Role</div>
      <div class="col col-5">Action</div>
    </li>
    {
 users && users.map((user, i) => {
 return (
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">{user.nom}</div>
      <div class="col col-2" data-label="Customer Name">{user.prenom}</div>
      <div class="col col-3" data-label="Amount">{user.email}</div>
      <div class="col col-4" data-label="Payment Status">{user.role}</div>
      <div class="col col-5" data-label="Payment Status">Delete</div>
    </li>
  )
  } 
  )
  }

    
  
  </ul>
</div>
    </div>
  </section>
  </div>
  )
}

export default ListeUser