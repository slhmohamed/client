import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
 
import jwt_decode from 'jwt-decode';
import ChatContainer from "./ChatContainer";
import Welcome from "./Welcome";
import Contacts from "./Contacts";

export default function ChatRoom() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect( () => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    } else {
      setCurrentUser(
        jwt_decode(localStorage.getItem('token'))
      );
    }
  }, []);
  useEffect(() => {
    console.log(currentChat);
    if (currentUser) {
      socket.current = io("http://localhost:5000");
      socket.current.emit("add-user", currentUser);
    }
  }, [currentUser]);

  useEffect( () => {
    if (currentUser) {
      const token = localStorage.getItem('token');
            axios.get('http://localhost:5000/api/user/allusers/' +jwt_decode(token)._id)
        .then(data=>{
          console.log(data.data);
          setContacts(data.data);
        })
        
      }  
       
  
  }, [currentUser]);
  const handleChatChange = (chat) => {
    console.log(chat);
    setCurrentChat(chat);
  };
  return (
    <>
      <Container>
        <div className="container">
 
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-left: -209px;
  width: 79vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;