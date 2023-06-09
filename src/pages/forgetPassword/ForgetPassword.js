import React, {  useState } from "react";
import './ForgetPassword.css';
import  axios from  'axios' ;
import toast, { Toaster } from 'react-hot-toast';
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);

 axios.post('http://localhost:5000/api/auth/forgetPassword', {
        email: email,
        
      })
      .then(function (response) {
        console.log(response);
        toast.success('Email a été envoyé');  
        setEmail("")     
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
       <div className="wrapper">
      <div className="top">
      <i className='bx bx-mail-send'></i>
      </div>
      <div className="bottom">
        <div className="info">
          Subscribe to our channel and<br />get the latest updates
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" value={email}  onChange={e => setEmail(e.target.value)}  required />
          </div>
          <div className="input-box">
            <button type="submit" className="buttonFP"  >Envoyer</button>

          </div>
        </form>
        <div class="footer">
          Don't worry, we don't spam
        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgetPassword