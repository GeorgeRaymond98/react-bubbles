import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utlis/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  })
  const handleChange = e => {
    setCreds( {
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubble')
    }) 
    .catch(err => console.log(err))
  } 


  return (
    <>
      <div className="loginForm">
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="username" value={creds.username} onChange={handleChange}/>
          <input type="password" name="password" placeholder="password" value={creds.password} onChange={handleChange}/>
          <button type="submit">Login</button>
        </form>
      </div>
      
    </>
  );
};

export default Login;
