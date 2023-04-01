import React, {  useState } from "react";
import './ForgetPassword.css'
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);

  };
  return (
    <div> <div className="wrapper">
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
            <input type="submit" value="Envoyer" />
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