 
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
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
