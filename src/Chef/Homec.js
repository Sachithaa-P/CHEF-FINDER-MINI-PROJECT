import React from 'react';
import Login from '../Login/Login';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Messagec from './Messagec';
import AddPostc from './AddPostc';
import Profilec from "./Profilec"
import Menuc from "./Menuc"
import {Navigate, useNavigate} from 'react-router-dom';
import Feed1c from './Feed1c';
import { Button } from '@mui/material';
import Feedc from './Feedc';
const Homec = () => {
    const navigate = useNavigate();
    
    const [value, setValue] = React.useState('Home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <BottomNavigation sx={{ width: "100%" ,position: "fixed", top: 0, left: 0, height: "50px", zIndex: 1,background: "#8E0E00",
background:"  -webkit-linear-gradient(to top, #1F1C18, #8E0E00)", 
background: "linear-gradient(to top, #1F1C18, #8E0E00)", 
}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="HOME"
        value="HOME"
        icon={<HomeIcon />}
        onClick={() => navigate('/Chef/Homec')}
      />
      <BottomNavigationAction
        label="REVIEW"
        value="REVIEW"
        icon={<RateReviewIcon />}
        onClick={() => navigate('/Chef/messagec')}
      />
      <BottomNavigationAction
        label="BOOKING"
        value="BOOKING"
        icon={<RestaurantMenuIcon />}
        onClick={() => navigate('/Chef/addpostc')}
      />
      <BottomNavigationAction 
      label="PROFILE" 
      value="PROFILE" 
      icon={<AccountCircleIcon />}
      onClick={() => navigate('/Chef/profilec')}
      />
            <BottomNavigationAction 
      label="MENU" 
      value="MENU" 
      icon={<MenuBookIcon />}
      onClick={() => navigate('/Chef/Menuc')}
      />
      <BottomNavigationAction 
      label="LOGOUT" 
      value="LOGOUT" 
      icon={<LogoutIcon />}
      onClick={() => navigate('/')}
      />
    </BottomNavigation>
    
    
    {/* <h1 style={{marginTop: "5%"}}>Connect</h1> */}
    <div>
                {
                (() => {
                    if(window.location.pathname==='/Chef/Homec'){
                        return <Feed1c/>
                    }
                    if(window.location.pathname==='/Chef/messagec'){
                        return <Messagec/>
                    }
                    if(window.location.pathname==='/Chef/addpostc'){
                        return <AddPostc/>
                    }
                    if(window.location.pathname==='/Chef/profilec'){
                        return <Profilec/>
                    }
                    if(window.location.pathname==='/Chef/Menuc'){
                        return <Menuc/>
                    }
                    if(window.location.pathname==='/'){
                        return <Login/>
                    }

                })()}
            </div>
            
        </div>
    );
}

export default Homec;
