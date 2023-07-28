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
import Message from './Message';
import AddPost from './AddPost';
import Profile from "./Profile"
import Menu from "./Menu"
import {Navigate, useNavigate} from 'react-router-dom';
import Feed1 from './Feed1';
import { Button } from '@mui/material';
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
        onClick={() => navigate('/Home')}
      />
      <BottomNavigationAction
        label="REVIEW"
        value="REVIEW"
        icon={<RateReviewIcon />}
        onClick={() => navigate('/message')}
      />
      <BottomNavigationAction
        label="BOOKING"
        value="BOOKING"
        icon={<RestaurantMenuIcon />}
        onClick={() => navigate('/addpost')}
      />
      <BottomNavigationAction 
      label="PROFILE" 
      value="PROFILE" 
      icon={<AccountCircleIcon />}
      onClick={() => navigate('/profile')}
      />
            <BottomNavigationAction 
      label="MENU" 
      value="MENU" 
      icon={<MenuBookIcon />}
      onClick={() => navigate('/Menu')}
      />
       <BottomNavigationAction 
      label="LOGOUT" 
      value="LOGOUT" 
      icon={<LogoutIcon />}
      onClick={() => navigate('/')}
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
                    if(window.location.pathname==='/Home'){
                        return <Feed1/>
                    }
                    if(window.location.pathname==='/message'){
                        return <Message/>
                    }
                    if(window.location.pathname==='/addpost'){
                        return <AddPost/>
                    }
                    if(window.location.pathname==='/profile'){
                        return <Profile/>
                    }
                    if(window.location.pathname==='/Menu'){
                        return <Menu/>
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
