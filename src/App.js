import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forgtopassword from './Forgto_password';
import Singup from './Singup_page';

function App() {
  return (<>
    <Forgtopassword/>
    <Routes>
      <Route path='/forgotpassword' element={<Forgtopassword/>}/>
      <Route path='/singup' element={<Singup/>}/>
    </Routes>
    </>
  );
}

export default App;
