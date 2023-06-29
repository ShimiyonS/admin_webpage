import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forgtopassword from './Forgto_password';
import Singup from './Singup_page';

function App() {
  return (<>
    <Routes>
      <Route path='/users/reset_password/:id/:token' element={<Forgtopassword/>}/>
      <Route path='/singup' element={<Singup/>}/>
    </Routes>
    </>
  );
}

export default App;
