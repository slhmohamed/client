import React from 'react'
import './ResetPassword.css'

function ResetPassword() {
  return (
    <div> 
  
      <div className="wrappers">
      <h3>Confirm password</h3>
    <div className="input-box">
      <input id="create_pw" type="password" required/>
      <label>Create password</label>
    </div>
    <div className="input-box">
      <input id="confirm_pw" type="password" required  />
      <label>Confirm password</label>
      <i className="fas fa-eye-slash show"></i>
    </div>
    <div className="alert">
      <i className="fas fa-exclamation-circle error"></i>
    
    </div>
 
      <button  className='button' type='submit' >Confirmer</button>
    
</div></div>
  )
}

export default ResetPassword