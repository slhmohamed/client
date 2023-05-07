import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function Modal({ setOpenModal,getAll }) {
    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [email,setEmail]=useState("");
    const [telephone,setTelephone]=useState(0);
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
         if(password!=confirmPassword){
          setErrorMessage('Le mot de passe ne correspond pas')
         }else{
        axios.post('http://localhost:5000/api/user/addUser',
         {
            nom:nom,
            prenom: prenom,
            email: email,
            password: password,
            telephone:telephone,
            role:role,

          })
          .then(function (response) {
            console.log(response);
            setOpenModal(false);
            getAll()
            toast.success('Utilisateur ajouté avec succès');  
          })
          .catch(function (error) {
           
            console.log(error);
          });
        }
      
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
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div class="container-add">
    <div class="title">Ajouter nouvel utilisateur</div>
    <div class="content">
      <form className="formM" onSubmit={handleSubmit}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Nom</span>
            <input type="text" value={nom}  onChange={e => setNom(e.target.value)}  placeholder="Enter your name" required />
          </div>
          <div class="input-box">
            <span class="details">Prénom</span>
            <input type="text" value={prenom}  onChange={e => setPrenom(e.target.value)} placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" value={email}  onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required/>
          </div>
          <div class="input-box">
            <span class="details">Télephone</span>
            <input type="text" value={telephone}  onChange={e => setTelephone(e.target.value)} placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Mot de passe</span>
            <input type="password" value={password}  onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required/>
          </div>
          <div class="input-box">
            <span class="details">Confirme Mot de passe</span>
            <input type="password" value={confirmPassword}  onChange={e => setConfirmPassword(e.target.value)}  placeholder="Confirm your password" required/>
          </div>
        </div>
        {errorMessage && ( 
                        <p className="error"> <i class='bx bx-error'></i> {errorMessage} </p>
                    )}
        <div class="gender-details">
          <input type="radio" value="SuperAdmin" name="gender" id="dot-1" onChange={e => setRole("SuperAdmin")}/>
          <input type="radio" value="Unite" name="gender" id="dot-2" onChange={e => setRole("Unite")}/>
          <input type="radio" value="Invite" name="gender" id="dot-3" onChange={e => setRole("Invite")}/>
          <input type="radio" value="Visiteur" name="gender" id="dot-4" onChange={e => setRole("Visiteur")}/>
          <input type="radio" value="Ministre" name="gender" id="dot-5" onChange={e => setRole("Ministre")}/>

          <span class="gender-title">Role</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Super Admin</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Unite</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Invite</span>
          </label>
          <label for="dot-4">
            <span class="dot for"></span>
            <span class="gender">Visiteur</span>
            </label>
            <label for="dot-5">
            <span class="dot five"></span>
            <span class="gender">Ministre</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div>
 
      </div>
    </div>
    </div>
  );
}

export default Modal;