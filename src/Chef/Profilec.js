import React from 'react';
import "./Profilec.css";
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import  Box  from "@mui/material/Box";


const Profilec = () => {
  return (
    // <div>
    //     <div className="hh">
    //     <h1>Profile</h1>
    //     </div>
    // <div className="profile-container">
    //   <div className="profile-header">
    //   </div>
    //   <div className="profile-content">
    //     <div className="profile-picture">
    //       <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" />
    //     </div>
    //     <div className="profile-details">
    //       <h2>Your Name</h2>
    //       <p>Username :     your_username</p><br></br>
    //       <p>Email    :     your_email@example.com</p><br></br>
    //       <p>Location :     City, Country</p>
    //     </div>
    //   </div>
    //   <div className="profile-footer">
    //     <button>Edit Profile</button>
    //   </div>
    // </div>
    // </div>
    <div>
    <div class="container">
  <div class="row">
    <div class="main">
      <div class="info">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="prof rounded-circle img-fluid" />
        <h1>xxx</h1>
        <hr></hr>
      </div>
      <div class="body">
       <ul class="fa-ul">
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Username   :     your_username</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Email      :     your_email@example.com</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Location   :     City, Country</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>PhoneNumber:     86596579877</li>
        </ul>
      </div>
      <div class="footer">
      {/* <button>Edit Profile</button> */}
      <Button component={NavLink} to='/Updateprofilec' variant="contained"  >edit profile</Button> 

      </div>
    </div>
  </div>
  <div>
  </div>
</div>
<Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:100px)": {
              fontSize: "0.8rem",
            },
          }}
        >
          All Rights Reserved &copy; ChefKart
        </Typography>
      </Box>
</div>


  );
};

export default Profilec;
