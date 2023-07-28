import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import './Bookingf.css'; 
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Bookingf = () => {
  const [formData, setFormData] = useState({
    chefName: '',
    username: '',
    numberOfGuests: '',
    dateOfEvent: '',
    bookingType: '',
    location: '',
    menu: '',
   
  });
  const [chefName, setChefName] = useState('');
  const [username, setUsername] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [dateofEvent, setDateofEvent] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [location, setLocation] = useState('');
  const [menu, setMenu] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleReview = async() => {

    try{
  
        const data = {
            chefName : chefName,
            username : username,
            numberOfGuests : numberOfGuests,
            dateofEvent : dateofEvent,
            bookingType : bookingType,
            location : location,
            menu : menu,
            
        }
        console.log(chefName,username,dateofEvent,numberOfGuests,bookingType,location,menu);
        const response = await axios.post("http://localhost:8080/Booking/addBooking", data);
        console.log(response.data);
            navigate('/');
    }
    catch(e){
        setError(e.message);
    }
}
 
  
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // You can perform your booking submission logic here
  // };

  return (
    <div classname="hel">
    <div className="booking-form-container">
      <h2>Book a Chef</h2>
      <form onSubmit={handleReview}>
        <TextField
          label="Chef Name"
          variant="outlined"
          name="chefName"
          value={chefName}
          onChange={e => setChefName(e.target.value)} 
          required
          fullWidth
        />
        <TextField
          label="username"
          variant="outlined"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)} 
          required
          fullWidth
        />
        <TextField
        //   label="Date of Event"
          variant="outlined"
          name="dateOfEvent"
          type="date"
          value={dateofEvent}
          onChange={e => setDateofEvent(e.target.value)} 
          required
          fullWidth
        />
        <TextField
          label="Number of Guests"
          variant="outlined"
          name="numberOfGuests"
          value={numberOfGuests}
          onChange={e => setNumberOfGuests(e.target.value)} 
          type="number"
          required
          fullWidth
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="booking-type">Booking Type</InputLabel>
          <Select
            label="Booking Type"
            name="bookingType"
            value={bookingType}
            onChange={e => setBookingType(e.target.value)} 
            required
          >
            <MenuItem value="Private">Party</MenuItem>
            <MenuItem value="Corporate">One meal</MenuItem>
            <MenuItem value="Wedding">For a week</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Location"
          variant="outlined"
          name="location"
          value={location}
          onChange={e => setLocation(e.target.value)} 
          required
          fullWidth
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="menu">Menu</InputLabel>
          <Select
            label="Menu"
            name="menu"
            value={menu}
            onChange={e => setMenu(e.target.value)} 
            required
          >
            <MenuItem value="Italian">Indian</MenuItem>
            <MenuItem value="Japanese">Italian</MenuItem>
            <MenuItem value="Vegan">Mexican</MenuItem>
          </Select>
        </FormControl>
        {/* <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData.menu}
            onChange={handleChange}
            required
          >
            <MenuItem value="nonVeg">nonVeg</MenuItem>
            <MenuItem value="Veg">Veg</MenuItem>
          </Select>
        </FormControl> */}
      
        <Button   type="submit" variant="contained" color="primary" fullWidth >
          Book Now
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Bookingf;