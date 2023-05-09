import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import { useNavigate } from "react-router-dom";


export default function Chat() {
  const navigate = useNavigate()
  const socket = useRef();
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  // Simulating static data for currentUser
  useEffect(() => {
    setCurrentUser({
      _id: 1, // replace with your desired static value
      isAvatarImageSet: true // replace with your desired static value
    });
  }, []);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  // Define default values for chat UI
  const defaultChat = {
    id: 0,
    name: "Default Chat",
    messages: [] // replace with default messages array
  };

  return (
    <>
      <Container>
      <div className="container">
          {/* Render ChatContainer with currentChat or defaultChat */}
          <ChatContainer currentChat={currentChat || defaultChat} socket={socket} />
        </div>
      </Container>
    </>
  );
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #424242;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #D3D3D3;
    display: grid;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
