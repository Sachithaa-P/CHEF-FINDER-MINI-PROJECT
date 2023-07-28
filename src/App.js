import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Signup from './Login/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileDetails from './Login/ProfileDetails';
import Feed from './Home/Feed';
import Menu from './Home/Menu';
// import Feedback from './Home/Feedback';
import { useHistory } from 'react-router-dom';
import AddPost from './Home/AddPost';
import Updateprofile from './Home/updateprofile';
import User from './Home/User';
import Homec from './Chef/Homec';
import AddPostc from './Chef/AddPostc';
import Profilec from './Chef/Profilec';
import Messagec from './Chef/Messagec';
import Feedc from './Chef/Feedc';
import Menuc from './Chef/Menuc';
import { Provider } from "react-redux";
import Bookingf from './Home/Bookingf';
import Customisationm from './Home/Customisationm';
import Admin from './Chef/Admin';
import store from "./Redux/reduxStore.js"

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/book" element={<Feed/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/profiledetails" element={<ProfileDetails/>}></Route>
        <Route path="/feed" element={<Home/>}></Route>
        <Route path="message" element={<Home/>}></Route>
        <Route path="/addpost" element={<Home/>}></Route>
        <Route path="/profile" element={<Home/>}></Route>
        <Route path="/Menu" element={<Home/>}></Route>
        {/* <Route path="/Image" element={<Home/>}></Route> */}

        {/* <Route path="/Feedback" element={<Home/>}></Route> */}
        <Route path="/Updateprofile" element={<Updateprofile/>}></Route>
        <Route path="/Bookingf" element={<Bookingf/>}></Route>
        <Route path="/Customisationm" element={<Customisationm/>}></Route>
        <Route path="/User" element={<User/>}></Route>
        <Route path="/Chef/Homec" element={<Homec/>}></Route>
        <Route path="/Chef/Admin" element={<Admin/>}></Route>
        <Route path="/Chef/feedc" element={<Homec/>}></Route>
        <Route path="/Chef/addpostc" element={<Homec/>}></Route>
        <Route path="/Chef/profilec" element={<Homec/>}></Route>
        <Route path="/Chef/messagec" element={<Homec/>}></Route>
        <Route path="/Chef/Menuc" element={<Menuc/>}></Route>
        

      </Routes>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
