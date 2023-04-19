 
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
import Sidebar from './components/sideBar/Sidebar';
import Navbar from './components/navBar/Navbar';
import ListeUser from './pages/admin/users/listeUser/ListeUser';
import Event from './pages/admin/event/Event';
 
import AddEvents from './pages/admin/addEvents/AddEvents';
import UpdateEvent from './components/calandar/UpdateEvent';
import UpdateEvents from './pages/admin/updateEvents/UpdateEvents';
import Profile from './pages/admin/profile/Profile';
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

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
