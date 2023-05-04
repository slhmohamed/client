import React, { useEffect, useState } from 'react'
import './PV.css'
import Sidebar from '../sideBar/Sidebar';
import Navbar from '../navBar/Navbar';
 import axios from 'axios';
import { format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';
import  jwt_decode  from 'jwt-decode';
import ModalPV from '../modelPV/ModalPV'
import { Toaster, toast } from 'react-hot-toast';
 
function PV() {
    const [modalOpen, setModalOpen] = useState(false);
    const [pvs,setPVS]=useState([]);
    const [comment,setComment]=useState('')
    const [comments,setComments]=useState([])
    const param=useParams()

const getComments=()=>{
  console.log("get comments");
  axios.get('http://localhost:5000/api/event/getShow/'+param.id).then(result=>{
        console.log(result);
        setComments(result.data.data.remarque)
        

        
       })
}
    useEffect(()=>{
      
        getComments()
    axios.get('http://localhost:5000/api/pv/getAllPV/'+param.id)
     .then(function (response) {
      console.log(response);
        const convertedPV =  response.data.data.map(pvE=>{
 
            return{
              sujet: pvE.sujet,
             date: format(new Date(pvE.createdAt), 'yyyy/MM/dd') ,
              rapport:"http://localhost:5000/"+pvE.rapport,
              rapportFinale:pvE.rapportFinale,
              id: pvE._id,  
            }
            
          })
          console.log(convertedPV);
          setPVS(convertedPV);

    
            
           
     })
    },[])

    const onSubmitComment = e =>{
      e.preventDefault()
     
      axios.post('http://localhost:5000/api/event/addComment/',{
        sender:jwt_decode(localStorage.getItem('token'))._id,
        eventId:param.id,
        comment:comment
      })
      .then(function (response) {
        getComments()
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
  <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Evenement/ <i class='bx bxs-calendar'></i> PV 
  </i>
 </div>
 
    <h2>Liste des PVs  </h2>
  
  <div className='buttons'>
    
    <button className='ajoutDesi'  onClick={() => {
          setModalOpen(true);
          console.log("ok");
          console.log(modalOpen);
        }}>Ajouter PV</button>
        <div className='coment'>
          <textarea placeholder='Entre votre commentaire' value={comment}  onChange={e => setComment(e.target.value)}></textarea>
          <button className='b-coment' onClick={onSubmitComment}>Ajouter</button>
        </div>

  </div>
  {pvs?.length
            ?
    <div class="containerDesi">
  
    <div class="table-wrapperDS">
      <table>
        <thead>
          <tr>
            <th>Sujet</th>
            <th>Rapport</th>
            <th>Rapport finale</th>
            <th>Date</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
        {
 pvs && pvs.map((pv, i) => {
 return (
          <tr>
            <td  >{pv.sujet}</td>
            <td>{pv.rapport!=''?<div><a href={pv.rapport}    target="_blank" download>Download</a></div>:<div>Pas de rapport</div>}</td>
            <td>{pv.rapportFinale!=''?<div><a href="`http://localhost:5000/${pv.rapportFinale}`"    target="_blank" download>Download</a></div>:<div>Pas de rapport</div>}</td>
            <td>{pv.date}</td>
            <td className='icon-desicion'><Link className="b-update bt" to={`/event/updatePV/${pv.id}`}><i class='bx bx-pencil'></i></Link></td>
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
  
  {modalOpen && <ModalPV setOpenModal={setModalOpen} />}
  </div>
  )
}

export default PV