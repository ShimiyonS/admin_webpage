import React from "react";
import "./forgotpassword.css";
const Forgtopassword = () => {
  return (
    <div className="App">
        <div className="container">
          <h2>Forgot Password</h2>
          <form action="" method="post">
            <label htmlFor="newpassword">New Password:</label>
            <input type="Password" id="email" name="password" required />
            <br />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
  );
};

export default Forgtopassword;
