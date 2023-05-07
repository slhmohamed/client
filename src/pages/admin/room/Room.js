import io from "socket.io-client";
import { useEffect, useState } from "react";
 import Chat from './../../Chat';
 import './Room.css'
import   jwt_decode  from 'jwt-decode';
import Navbar from "../../../components/navBar/Navbar";
import Sidebar from "../../../components/sideBar/Sidebar";
import ChatRoom from "../../chat/ChatRoom";

 
function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  useEffect(()=>{
   
 
  },[ ])


  

  return (
    <div>

    <Sidebar />
    <section class="home-section">

        <Navbar />

        <div class="home-content">
            <div className='navigation'>
                <i >
                    <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Chat
                </i>
            </div>
            <div className="App">
      
<ChatRoom/>
   
  </div>
        </div>
    </section>




</div>
  );
}

export default Room
