import React, {Component}  from 'react';
import Avatar from '@mui/material/Avatar';
import './Feed.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import Footer from './Footer';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
// import { useNavigate } from 'react-router-dom';
// import AddPost from './AddPost';
import {Navigate} from 'react-router-dom';




class Feed extends Component{
  constructor(props) {
    super(props);
    this.state = {
        submitted:false,
    };
  
}
handlesubmit =(event) => {
  // event.preventDefault();
  this.setState({submitted:true})
  console.log("clicked");
  }

  render(){
    return (
      <>
           {this.state.submitted===true && <Navigate to="/addpost"/>}
        <div style={{marginTop: "5rem"}}>
            <h1>HOME</h1>
            <h2>WELCOME</h2>
            <div className='p'>
            <p>
            The culinary world is a treasure trove of flavors, techniques, and talented chefs. <br></br>
            However, finding the perfect chef who aligns with your preferences, dietary requirements, and event needs can be a daunting task.<br></br>
            Fortunately, the advent of technology has brought forth innovative solutions, and one such solution is the Chef Finder application.
            </p>
            <h3>
              FAMOUS CUSINES
            </h3>
            <div className='fc'>
          
              <img src="https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoJTIwY3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"></img>
              <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"></img>
              <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg"></img>
              <img src="https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBmb29kfGVufDB8fDB8fHww&w=1000&q=80"></img>
            </div>
            <div className="button">
             {/* <Button  onclick={this.handleSubmit} >BOOK NOW</Button>  */}
            {/* <a href="/AddPost">BOOK NOW </a> */}
            </div>
            <form onSubmit={this.handleSubmit}>
              <button>Check</button>
            </form>
             

            <p>Have Any Question? Call: +91 93886 06014</p>
            </div>
            
            </div>
            {this.state.submitted===true && <Navigate to="/addpost"/>}
            <Footer/>
    </>
    );
}
}

export default Feed;
