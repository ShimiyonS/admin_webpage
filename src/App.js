//import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forgtopassword from "./Forgto_password";
//import Singup from './Singup_page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/users/reset_password/:id/:token" element={<Forgtopassword />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>

    </>
  );
}

export default App;
