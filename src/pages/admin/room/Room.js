import io from "socket.io-client";
import { useEffect, useState } from "react";
 import Chat from './../../Chat';
 import './Room.css'
import   jwt_decode  from 'jwt-decode';
import Navbar from "../../../components/navBar/Navbar";
import Sidebar from "../../../components/sideBar/Sidebar";

const socket = io.connect("http://localhost:5000");

function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  useEffect(()=>{
    socket.emit("join_room", room);
    setShowChat(true);
    const token=localStorage.getItem('token');
      console.log(jwt_decode(token).username);
      setUsername(jwt_decode(token).username);
 
  },[room])


  

  return (
    <div>

    <Sidebar />
    <section class="home-section">

        <Navbar />

        <div class="home-content">
            <div className='navigation'>
                <i >
                    <i class='bx bx-home-alt-2'></i> Dashboard / <i class='bx bxs-calendar'></i> Liste des désicions
                </i>
            </div>
            <div className="App">
      
      <Chat socket={socket} username={username} room={room} />
   
  </div>
        </div>
    </section>




</div>
  );
}

export default Room
