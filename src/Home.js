import React from "react";
import  { useNavigate }from "react-router-dom";
import "./forgotpassword.css";
import { useState } from "react";
const Home = (event) => {
  const [email, setEmail] = useState();
  const history =useNavigate();
  const hancdelClick = (e)=>{
    e.preventDefault();
   history(`/users/reset_password/${email}`)
  }
  return (
    <>
      <div className="App">
        <div className="container">
          <h2>Forgot Password</h2>
          <form onSubmit={hancdelClick} method="">
            <label htmlFor="newpassword">Email Id :</label>
            <input type="email" id="email"  name="email" required onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <br />
            <button >Click to change the Password</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default Home;
