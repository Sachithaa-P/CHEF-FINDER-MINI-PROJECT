import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Footer from './Footer';
import "./Feed1.css";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// import CarouselComponent from './CarouselComponent';
const Feed1 = () => {
  const location = useLocation();
  const { email } = location.state || {};
    const navigate = useNavigate();
   
    return (
        <div>
        
        <div style={{marginTop: "5rem"}}>
            <h1>HOME</h1>
            <p style={{fontSize: "25px"}} >WELCOME {email}</p>
      
            <div className='p'>
            <p>
            The culinary world is a treasure trove of flavors, techniques, and talented chefs. <br></br>
            However, finding the perfect chef who aligns with your preferences, dietary requirements, and event needs can be a daunting task.<br></br>
            Fortunately, the advent of technology has brought forth innovative solutions, and one such solution is the Chef Finder application.
            </p>
            <div className='c'>
            <h1>OUR FAMOUS CUSINES</h1>


{/* 
<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
     
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
     
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"

        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"

        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section> */}
  {/* <div class="slide-container">
  <span id="slider1"></span>
  <span id="slider2"></span>
  <span id="slider3"></span>
  <span id="slider4"></span>
  <span id="slider5"></span>
  <div class="image-container">
    <img src="https://w0.peakpx.com/wallpaper/514/512/HD-wallpaper-indian-restaurant-san-francisco-deccan-house-sf-north-indian-food.jpg" alt="" class="slider-image one"/>
    <img src="https://wallpaperaccess.com/full/1317028.jpg" alt="" class="slider-image two"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_Mu9W2kHDhAAOLy797lgb2ZiO2UPbT3Hrg&usqp=CAU" alt="" class="slider-image three"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kq6BtqBq8dGmFajJkXNjw6PhfZPHbpPvlA&usqp=CAU" alt="" class="slider-image four"/>
    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-an-arrangement-of-various-indian-food-image_2683809.png" alt="" class="slider-image five"/>
  </div>
  <div class="button-container">
    <a href="#slider1" class="slider-button"></a>
    <a href="#slider2" class="slider-button"></a>
    <a href="#slider3" class="slider-button"></a>
    <a href="#slider4" class="slider-button"></a>
    <a href="#slider5" class="slider-button"></a>
  </div>
</div> */}
<div className="c" style={{ width: '700px', height: '500px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: 'auto', overflow: 'hidden' }}>
      <div className="slide-container" style={{ margin: '50vh auto 0 auto', transform: 'translateY(-50%)', width: '600px', height: '450px', overflow: 'hidden', backgroundSize: 'cover' }}>
        <span id="slider1"></span>
        <span id="slider2"></span>
        <span id="slider3"></span>
        <span id="slider4"></span>
        <span id="slider5"></span>
        <div className="image-container" style={{ display: 'inline-block', width: '3000px', height: '400px', position: 'relative', transition: 'left 1s', animation: 'slide 15s infinite', backgroundSize: 'cover' }}>
          <img src="https://w0.peakpx.com/wallpaper/514/512/HD-wallpaper-indian-restaurant-san-francisco-deccan-house-sf-north-indian-food.jpg" alt="" className="slider-image one" style={{ width: '20%', backgroundSize: 'cover' }} />
          <img src="https://wallpaperaccess.com/full/1317028.jpg" alt="" className="slider-image two" style={{ width: '20%', backgroundSize: 'cover' }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_Mu9W2kHDhAAOLy797lgb2ZiO2UPbT3Hrg&usqp=CAU" alt="" className="slider-image three" style={{ width: '20%', backgroundSize: 'cover' }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kq6BtqBq8dGmFajJkXNjw6PhfZPHbpPvlA&usqp=CAU" alt="" className="slider-image four" style={{ width: '20%', backgroundSize: 'cover' }} />
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-an-arrangement-of-various-indian-food-image_2683809.png" alt="" className="slider-image five" style={{ width: '20%', backgroundSize: 'cover' }} />
        </div>
        <div className="button-container" style={{ position: 'relative', top: '10px' }}>
          <a href="#slider1" className="slider-button" style={{ height: '10px', width: '10px', margin: '4px', display: 'inline-block', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></a>
          <a href="#slider2" className="slider-button" style={{ height: '10px', width: '10px', margin: '4px', display: 'inline-block', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></a>
          <a href="#slider3" className="slider-button" style={{ height: '10px', width: '10px', margin: '4px', display: 'inline-block', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></a>
          <a href="#slider4" className="slider-button" style={{ height: '10px', width: '10px', margin: '4px', display: 'inline-block', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></a>
          <a href="#slider5" className="slider-button" style={{ height: '10px', width: '10px', margin: '4px', display: 'inline-block', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></a>
        </div>
      </div>
    </div>
 
            </div>
            <div className="button" >
             <Button   variant="outlined"  color="error"  onClick={() => navigate('/addpost')} >FIND CHEF</Button> 
            
            </div><br></br>      

            <p>Have Any Question? Call: +91 93886 06014</p>
            </div>
          
            
            </div>
<Footer/>
        </div>
    );
}

export default Feed1;
