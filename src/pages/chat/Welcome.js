import React, { useState, useEffect } from "react";
 import Robot from '../../../src/assets/robot.gif'
import jwt_decode from 'jwt-decode';
import { styled } from 'styled-components';
import axios from "axios";

export default function Welcome() {
    const [userName, setUserName] = useState("");
    useEffect( () => {
        const token = localStorage.getItem('token');
         axios.get('http://localhost:5000/api/user/getSingle/' + jwt_decode(token)._id)
          .then(result => {
      setUserName(result.data.data.nom)})
        }, []);
    return (
      <Container>
        <img src={Robot} className="chatI" alt="" />
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h4>Please select a chat to Start messaging.</h4>
      </Container>
    );
  }
  
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    img {
      height: 20rem;
    }
    span {
      color: #4e0eff;
    }
  `;