import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import  axios from  'axios' ;
import './Login.css'
function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
 const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
     
    axios.post('http://localhost:5000/api/auth/login',
     {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('role',response.data.role);
        navigate('/dashboard')
      })
      .catch(function (error) {
        setErrorMessage(error.response.data.errors);
        console.log(error);
      });
  
  };
  return (
    <div   >  
     
     <section class="container forms">
            <div class="form login">
                <div class="form-content">
                    <header>Se connecter</header>
                    {errorMessage && ( 
                        <p className="error"> <i class='bx bx-error'></i> {errorMessage} </p>
                    )}
                    <form  onSubmit={handleSubmit}>
                        <div class="field input-field">
                            <input type="email" value={email}  onChange={e => setEmail(e.target.value)} placeholder="Email" class="input"/>
                        </div>

                        <div class="field input-field">
                            <input type={passwordType} value={password}  onChange={e => setPassword(e.target.value)} placeholder="Password" class="password"/>
                          
                            { passwordType==="password"?   <i onClick={togglePassword} class='bx bx-hide eye-icon'></i> :
                             <i onClick={togglePassword} class='bx bx-show eye-icon'></i> }
                        </div>

                        <div class="form-link">
                            <Link to="/forgetPassword" class="forgot-pass">Mot de passe oublié ?</Link>
                        </div>

                        <div class="field button-field">
                            <button>Se connecter</button>
                        </div>
                    </form>

                    
                </div>

                 
 

           

            </div>

             
             
        </section>
    </div>
  )
}

export default Login