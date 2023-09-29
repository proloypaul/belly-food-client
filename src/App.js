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
import MyProfile from './Components/MyProfile/MyProfile';
import MyOrder from './Components/MyProfile/MyOrder/MyOrder';
import ManageOrder from './Components/MyProfile/ManageOrder/ManageOrder';
import EditProfile from './Components/MyProfile/EditProfile/EditProfile';
import ProfileOverView from './Components/MyProfile/ProfileOverView/ProfileOverView';
import Review from './Components/MyProfile/UserReview/Review';

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
          {/* <Route path='/myProfile' element={<MyProfile/>}/> */}
          {/* Dashboard routes */}
          <Route path='myProfile/' element={<MyProfile/>}>
            <Route path='myOrder' element={<MyOrder/>}/>
            <Route path='manageOrder' element={<ManageOrder/>}/>
            <Route path='editProfile' element={<EditProfile/>}/>
            <Route path='profileOverView' element={<ProfileOverView/>}/>
            <Route path='review' element={<Review/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

// https://dribbble.com/shots/22007304-Restaurant-Website
export default App;
