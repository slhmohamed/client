 
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
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgetPassword" element={<ForgetPassword/>}/>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
