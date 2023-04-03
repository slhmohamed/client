import React, { useState, useEffect } from 'react';
import './ResetPassword.css'
import { useParams } from 'react-router-dom';
import { Link ,useNavigate } from "react-router-dom";
import  axios from  'axios' ;

function ResetPassword() {
  const [newPassword,setNewPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [resetPasswordLink,setResetPasswordLink]=useState("")
  const navigate = useNavigate()
  const params = useParams();

  
const handleSubmit = e => {
  e.preventDefault();
 
  console.log(params.token)
  setResetPasswordLink(params.token)
  console.log(newPassword);
  console.log(resetPasswordLink);
   
  axios.post('http://localhost:5000/api/auth/resetPassword', {
    newPassword: newPassword,
    resetPasswordLink: resetPasswordLink
    })
    .then(function (response) {
      console.log(response);
       
      navigate('/login')
    })
    .catch(function (error) {
      console.log(error);
    });

};
  return (
    <div> 
  <form onSubmit={handleSubmit}>
      <div className="wrappers">
      <h3>Confirm password</h3>
    <div className="input-box">
      <input id="create_pw" type="password" value={newPassword}  onChange={e => setNewPassword(e.target.value)}  required/>
      <label>Create password</label>
    </div>
    <div className="input-box">
      <input id="confirm_pw" type="password" required  value={confirmPassword}  onChange={e => setConfirmPassword(e.target.value)}  />
      <label>Confirm password</label>
      <i className="fas fa-eye-slash show"></i>
    </div>
    <div className="alert">
      <i className="fas fa-exclamation-circle error"></i>
    
    </div>
 
      <button  className='button' type='submit' >Confirmer</button>
    
</div>
</form>
</div>
  )
}

export default ResetPassword