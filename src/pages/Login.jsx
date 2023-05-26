import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import coachken from "../img/coachken.PNG";
import LazyLoad from "react-lazyload";


export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const details = {
          email: values.email,
          password: values.password
        };
        
        axios
        .post("http://localhost:4000/user/login", details) // Replace the URL with the login endpoint
        .then((res) => {
          console.log(res);
          localStorage.clear();
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/chat"); // Replace the "/login" route with the appropriate route after successful login
        })
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    } else {
      throw new Error("Validation failed");
    }
  };


  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <LazyLoad once>
              <img src={coachken} alt="" />
            </LazyLoad>
            <h1>Ask Coach Canion</h1>
          </div>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
          <span>
            Forgot Password ? <Link to="/register">Click here.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #D3D3D3;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2.2rem;
    }
    h1 {
      color: #ff0000;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color:  #424242;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: white;
    padding: 1rem;
    border: 0.1rem solid #D3D3D3;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid white;
      outline: none;
    }
  }
  button {
    background-color: #D3D3D3;
    color: #424242;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: white;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #D3D3D3;
      text-decoration: none;
      font-weight: bold;
    }
  }
  span2 {
    color: white;
    a {
      color: #D3D3D3;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;