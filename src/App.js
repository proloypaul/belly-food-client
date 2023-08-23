import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carts from './Components/Carts/Carts';
import AllFood from './Components/Foods/AllFood/AllFood';
import Breakfast from './Components/Foods/Breakfast/Breakfast';
import Dinner from './Components/Foods/Dinner/Dinner';
import FoodDetails from './Components/Foods/FoodDetails/FoodDetails';
import Lunch from './Components/Foods/Lunch/Lunch';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SignIn from './Components/Registation/SignIn/SignIn';
import SignUp from './Components/Registation/SignUp/SignUp';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/foodDetails/:id' element={<FoodDetails/>}/>
          <Route path='/allFood' element={<AllFood/>}/>
          <Route path='/carts' element={<Carts/>}/>
          <Route path='/' element={<Home/>}>
            <Route path='breakfast' element={<Breakfast/>}/>
            <Route path='lunch' element={<Lunch/>}/>
            <Route path='dinner' element={<Dinner/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
