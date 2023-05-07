 
import './App.css';
 import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
  import {


  BrowserRouter  ,
   Routes,
  Route,
  
} from "react-router-dom";
import ResetPassword from './pages/resetPassword/ResetPassword';
import Dashboard from './pages/admin/dashboard/Dashboard';
import ListeEntreprise from './pages/admin/entreprise/listeEntreprise/ListeEntreprise';
import { useState } from 'react';

import ListeUser from './pages/admin/users/listeUser/ListeUser';
import Event from './pages/admin/event/Event';
 
import AddEvents from './pages/admin/addEvents/AddEvents';
import UpdateEvents from './pages/admin/updateEvents/UpdateEvents';
import Profile from './pages/admin/profile/Profile';
import Desicion from './components/calandar/Desicion';
import UpdateDesicion from './components/calandar/UpdateDesicion';
import ListeDesicion from './pages/admin/listeDesicions/ListeDesicion';
import Room from './pages/admin/room/Room';
import PV from './components/calandar/PV';
import ChatRoom from './pages/chat/ChatRoom';
 
    function App() {
  const [connected,setConnected]=useState(false)
  return (

    <BrowserRouter>
       
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgetPassword" element={<ForgetPassword/>}/>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/listeEntreprise" element={<ListeEntreprise />} />
      <Route path="/listeUtilisateur" element={<ListeUser />} />
      <Route path="/events" element={<Event />} />
      <Route path="/addEvents" element={<AddEvents />} />
      <Route path='/event/update/:id' element={<UpdateEvents/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/event/desicion/:id' element={<Desicion/>}/>
      <Route path='/event/updateDesicion/:id' element={<UpdateDesicion/>}/>
      <Route path='/liste-désicion' element={<ListeDesicion/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/chat' element={<Room/>}/>
      <Route path='/pv/:id' element={<PV/>}/>
 
      
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
