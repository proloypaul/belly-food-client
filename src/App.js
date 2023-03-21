import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Components/Foods/Breakfast/Breakfast';
import Dinner from './Components/Foods/Dinner/Dinner';
import Lunch from './Components/Foods/Lunch/Lunch';
import Home from './Components/Home/Home';
import SignIn from './Components/Registation/SignIn/SignIn';
import SignUp from './Components/Registation/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/' element={<Home/>}>
            <Route path='breakfast' element={<Breakfast/>}/>
            <Route path='lunch' element={<Lunch/>}/>
            <Route path='dinner' element={<Dinner/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
