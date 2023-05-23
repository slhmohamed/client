import React, { useEffect, useState } from 'react'
import './Desicion.css'
import Sidebar from '../sideBar/Sidebar';
import Navbar from '../navBar/Navbar';
import ModalDesicion from '../desicionModal/ModalDesicion';
import axios from 'axios';
import { format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';
import  jwt_decode  from 'jwt-decode';
import { Toaster, toast } from 'react-hot-toast';


function Desicion() {
    const [modalOpen, setModalOpen] = useState(false);
    const [desicions,setDesicions]=useState([]);
    const [comment,setComment]=useState('')
    const [comments,setComments]=useState([])
    const param=useParams()

const getComments=()=>{
   
  axios.get('http://localhost:5000/api/event/getShow/'+param.id).then(result=>{
        console.log(result);
        setComments(result.data.data.remarque)
        
       })
}
    useEffect(()=>{
      
        getComments()
        dec()
  
    },[])

    const dec=()=>{
      axios.get('http://localhost:5000/api/desicion/getSingle/'+param.id)
      .then(function (response) {
         
       
       const convertedDesicion =  response.data.data.map(evt=>{
         return{
           responsable: evt.responsable,
          date: format(new Date(evt.date), 'yyyy/MM/dd') ,
           event: evt.event ,
           remarques: evt.remarques,
           id: evt._id,
           status:evt.status,
           sujet:evt.sujet
         }
       })
 
         
        setDesicions(convertedDesicion)
      })
    }

    const onSubmitComment = e =>{
      e.preventDefault()
     
      axios.post('http://localhost:5000/api/event/addComment/',{
        sender:jwt_decode(localStorage.getItem('token'))._id,
        eventId:param.id,
        comment:comment
      })
      .then(function (response) {
        getComments();
        toast.success('Commentaire ajouté avec success');
        setComment('')

      })


    }

  return (
    <div>
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Sidebar/>
  <section class="home-section">
   
<Navbar/>

    <div class="home-content">
    <div className='navigation'>
  <i >
  <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Evenement/ <i class='bx bxs-calendar'></i> Desicion 
  </i>
 </div>
 
    <h2>Liste des desecionss  </h2>
  
  <div className='buttons'>
    
    <button className='ajoutDesi'  onClick={() => {
          setModalOpen(true);
          console.log("ok");
          console.log(modalOpen);
        }}>Ajouter desicion</button>
        <div className='coment'>
          <textarea placeholder='Entre votre commentaire' value={comment}  onChange={e => setComment(e.target.value)}></textarea>
          <button className='b-coment' onClick={onSubmitComment}>Ajouter</button>
        </div>

  </div>
  {desicions?.length>0
            ?
    <div class="containerDesi">
  
    <div class="table-wrapperDS">
      <table>
        <thead>
          <tr>
            <th>Sujet</th>
            <th>Status</th>
            <th>Responsable</th>
            <th>Date</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
        {
 desicions && desicions.map((desicion, i) => {
 return (
          <tr>
            <td  >{desicion.sujet}</td>
            <td>{desicion.status}</td>
            <td>{desicion.responsable?.nom} {desicion.responsable?.prenom}</td>
            <td>{desicion.date}</td>
            <td className='icon-desicion'><Link className="b-update bt" to={`/event/updateDesicion/${desicion.id}`}><i class='bx bx-pencil'></i></Link></td>
          </tr>
 )})}
        </tbody>
      </table>
    </div>
<div className='com'>

{comments?.length > 0
            ?<p className='coments-details'>
   {
 comments && comments.map((comt, i) => {
 return (
           <span className='sender-de' > {comt?.sender?.nom} {comt?.sender?.prenom}  : {comt?.comment}</span>
 )})}
            </p>:
  <p>No comments</p>}
</div>

   </div>
  
  :<div className='no-desicion'>No result found!</div>}
    </div>
  </section>
  
  {modalOpen && <ModalDesicion setOpenModal={setModalOpen} />}
  </div>
  )
}

export default Desicion