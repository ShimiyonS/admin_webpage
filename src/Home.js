import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  const redirect = (event) => {
    history("/users/reset_password/:id/:token");
  };
  return (
    <>
      <div>
        <button onClick={redirect}>Click to change the Password</button>
      </div>
    </>
  );
};

export default Home;
