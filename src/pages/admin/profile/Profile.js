import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sideBar/Sidebar'
import Navbar from '../../../components/navBar/Navbar'
import './Profile.css'
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast';
function Profile() {
  const [user,setUser]=useState({})
  const [form,setForm]=useState({})
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    const token=localStorage.getItem('token');
 
    axios.put('http://localhost:5000/api/user/updateUser/'+jwt_decode(token)._id,form)
      .then(function (response) {
        getInformation()
    toast.success('Utilisateur modifié avec succès');  
      })
      .catch(function (error) {
       
        console.log(error);
      });
    
  
    }
    useEffect(()=>{
      getInformation()
   },[])
  const  getInformation=()=>{
      const token=localStorage.getItem('token');
      console.log(jwt_decode(token));
      setUser(jwt_decode(token));
       axios.get('http://localhost:5000/api/user/getSingle/'+jwt_decode(token)._id)
       .then(result=>{
        setForm(result.data.data)
       })
    }

   
   
  return (
    
    <div>
    <Sidebar/>
  <section class="home-section">
   
<Navbar/>
    <div class="home-content">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
 <div className='navigation'>
  <i >
  <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Events
  </i>
 </div>
 
  <div class="main-content">
  <div class="row">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h5 class="title">Edit Profile</h5>
        </div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-md-5 pr-1">
                <div class="form-group">
                  <label>Nom</label>
                  <input name='nom' onChange={onChangeHandler} value={form.nom} type="text" class="form-control" disabled="" />
                </div>
              </div>
              <div class="col-md-3 px-1">
                <div class="form-group">
                  <label>Prénom</label>
                  <input name='prenom' onChange={onChangeHandler} value={form.prenom} type="text" class="form-control"    />
                </div>
              </div>
              <div class="col-md-4 pl-1">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input name='email' onChange={onChangeHandler} value={form.email}  id="email" type="email" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-1">
                <div class="form-group">
                  <label>Télephone</label>
                  <input name='telephone' onChange={onChangeHandler} value={form.telephone} type="text" class="form-control"   />
                </div>
              </div>
              <div class="col-md-6 pl-1">
                <div class="form-group">
                  <label>Mot de passe</label>
                  <input name='password' onChange={onChangeHandler} value={form.password} type="password" class="form-control"   />
                </div>
              </div>
            </div>
             
           <button className='update-button' type='submit'>Modifier</button>
          
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card-user">
        <div class="image">
          
        </div>
        <div class="card-body">
          <div class="author">
            <a href="#">
              <img class="avatar border-gray" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" alt="..."/>
              <h5 class="title">{form.nom} {form.prenom}</h5>
            </a>
            <p class="description">
              {form.role}
            </p>
          </div>
        
       
        <hr/>
   
   </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </section>
  </div>
  )
}

export default Profile