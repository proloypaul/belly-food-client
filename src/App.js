import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
