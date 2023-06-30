import React from "react";
import "./forgotpassword.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Forgtopassword = () => {
  const email = useParams();
  const [password, setPassword] = useState();
  const url = `https://surveyor-app-server.vercel.app/users/reset_password/${email.id}`;

  const headers = {
    "Content-Type": "application/json",
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      password: password,
    };
    console.log(user);
    getPostsData(user);
  };
  const getPostsData = (user) => {
    axios
      .post(url, user, { headers: headers })
      .then((data) => console.log(data.data.message))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="App">
        <div className="container">
          <h2>Forgot Password</h2>
          <form onSubmit={submitHandler} method="post">
            <label htmlFor="newpassword">New Password:</label>
            <input
              type="Password"
              id="pasword"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="newpassword">Confirm Password:</label>
            <input type="Password" id="confirmPassword" name="password" />
            <button>Click to change the Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgtopassword;
