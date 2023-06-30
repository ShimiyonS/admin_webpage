import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forgtopassword from "./Forgto_password";
import Home from "./Home";
//import Singup from './Singup_page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/reset_password/:id/:token" element={<Forgtopassword />} />
      </Routes>

    </>
  );
}

export default App;
