import React from "react";

const Forgtopassword = () => {
  return (
    <div className="App">
      <div className="container">
        <h2>Forgot Password</h2>
        <form action="" method="post">
          <label htmlFor="newPassword">New Password:</label>
          <input type="Password" id="email" name="newPassword" required />
          <br />
          <br />
          <input type="submit" value="Reset Password" />
        </form>
      </div>
    </div>
  );
};

export default Forgtopassword;
