import React, { useState, useEffect } from 'react';
import './style.css';


const PopUp = ({toggle, title, trueButtonName, falseButtonName, message, handleFalse, handleTrue}) => {
  const [open, setOpen] = useState('false');

  useEffect(() => {
    console.log(toggle);
    toggle ? setOpen('true') : setOpen('false')
  }, [toggle]);


  return (
 
    <div className="showConf fade"isOpen={open} >
             <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                {title}
              </h5>
            </div>
            <div class="modal-body">
              <p>{message}</p>
            </div>
            <div class="modal-footerD">
              <button onClick={() => handleFalse()} type="button" class="btn btn-secondary clo">
                {falseButtonName}
              </button>
              <button onClick={() => handleTrue()} type="button" class="btn btn-primary conf">
                {trueButtonName}
              </button>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </div>
 
  );
};
 export default PopUp;