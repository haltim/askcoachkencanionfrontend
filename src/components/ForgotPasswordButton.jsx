import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import axios from "axios";
import styled from "styled-components";
import { logoutRoute } from "../utils/APIRoutes";

export default function ForgotPasswordButton() {
  const navigate = useNavigate();
  
  const handleClick = () => {  
      navigate("/forgotpassword");  
  };

  return (
    <Button onClick={handleClick}>
      Forgot Password?
    </Button>
  );
}
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #0047AB;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;