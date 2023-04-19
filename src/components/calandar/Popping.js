import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
 
import * as moment from "moment"

import {Link} from "react-router-dom"
 import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./Poping.css"

 const Popping = ({open, handleClose, event, deleteEventApi, renderStatus, rerender})=> {
  const navigate = useNavigate();
  const {id, describe, title } = event;
  const start= moment(event.start).format("ddd DD MMM YY LT");
  const end= moment(event.end).format("ddd DD MMM YY LT");


  const handleDelete =async () => {
    axios.delete('http://localhost:5000/api/event/deletEvent/'+id)
    .then(function (response) {

      this.getAllUser();
      toast.success('Event a éte supprimé');  
     
    })
    .catch(function (error) {
      console.log(error);
    });
  }

   

  const modal = ()=>{
    return (
     <Modal show={open} onHide={handleClose}>
       <Modal.Header closeButton>
           <Modal.Title className="text-capitalize">{title}</Modal.Title>
         </Modal.Header>
         <Modal.Body> 
           {describe? <p className="lead">{describe}</p>: "No Dsecriptions Yet"}
           <div className="row justify-content-between">
             <p className="col small text-muted text-center pb-0 mb-0">from: {start}</p>
             <p className="col small text-muted text-center pb-0 mb-0">to: {end}</p>
           </div>
         </Modal.Body>
         <Modal.Footer>
    
           <Button className="b-close" variant="warning" onClick={handleClose}>Close</Button>
           <Link className="b-update" to={`/event/update/${id}`}><Button className="b-update" variant="success">Update</Button></Link>
           <Button className="b-delete" variant="danger" onClick={handleDelete}>Delete</Button>
       </Modal.Footer>
     </Modal>
    )
  }

  if(id){
    return modal()
  }else{
    <p>there is no modal to preview</p>
  }
  
 }

 function mapStateToProps({event}){
    return {
      event,
     //  modalStatus
    }
 }
 
 export default Popping