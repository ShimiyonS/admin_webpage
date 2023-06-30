import React from "react";
import "./forgotpassword.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Forgtopassword = () => {
  const email = useParams();
  const [password, setPassword] = useState("");
  const [success, setSuccess]=useState("");
  const url = `https://surveyor-app-server.vercel.app/users/reset_password/${email.id}`;

  const headers = {
    "Content-Type": "application/json",
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      password: password,
    };
   
    getPostsData(user);
  };
  const getPostsData = (user) => {
    axios
      .post(url, user, { headers: headers })
      .then((data) =>setSuccess(data.data.message))//console.log(data.data.message))
      .catch((error) => console.log(error));

  };
  const onChange = ()=>{
    setPassword("");
  }
  return (
    <>
      <div className="App">
        <div className="container">
          <h2>Forgot Password</h2>
          <form onSubmit={submitHandler} method="post">
            <label htmlFor="password">New Password:</label>
            <input
              type="Password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input type="Password" id="confirmpassword" name="password" />
            <button onClick={onChange}>Click to change the Password</button>
          </form>
          <div><p>{success}</p></div>
        </div>
      </div>
    </>
  );
};

export default Forgtopassword;
