import React from "react";
import "./forgotpassword.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgtopassword = () => {
  const email = useParams();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const url = `https://surveyor-app-server.vercel.app/users/reset_password/${email.id}`;

  const headers = {
    "Content-Type": "application/json",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast("Password Don't Match");
    } else {
      const user = {
        password: password,
      };
      getPostsData(user);
      setTimeout(() => {
        toast.success(success);
        toast.error(error);
      }, 600);
    }
  };
  const getPostsData = (user) => {
    axios
      .post(url, user, { headers: headers })
      .then((data) => setSuccess(data.data.message)) //console.log(data.data.message))
      .catch((error) => setError(error));
    setPassword("");
  };
  return (
    <>
      <div className="App">
        <div className="container">
          <h2>New Password</h2>
          <form onSubmit={submitHandler} method="post">
            <label htmlFor="password">New Password</label>
            <input
              type="Password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="Password"
              name="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button>Change the Password</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Forgtopassword;
