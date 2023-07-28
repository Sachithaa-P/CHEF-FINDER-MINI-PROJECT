import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./Customisationm.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const Customisationm = () => {
  const [foodItem, setFoodItem] = useState({
    email: '',
    itemName: '',
    category: '',
    price: '',
    description: '',
  });
  const [email, setEmail] = useState('');
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');   
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleReview = async() => {
  try{
  
    const data = {
      email: email,
        itemName : itemName,
        category : category,
        price : price,
        description : description
    }
    console.log(email, itemName, category,price,description);
    const response = await axios.post("http://localhost:8080/Customisation/addCustomisation", data);
    console.log(response.data);
        navigate('/');
}
catch(e){
    setError(e.message);
}
}


const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
setExpanded(!expanded);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem((prevFoodItem) => ({
      ...prevFoodItem,
      [name]: value,
    }));
  };

  // const handleReview = (e) => {
  //   e.preventDefault();
  //   console.log(foodItem); // You can perform your menu submission logic here
  // };

  return (
    <div className="food-menu-form-container">
      <h2>Food Menu Form</h2>
      <form onSubmit={handleReview}>
      <TextField
          label="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)} 
          required
          fullWidth
        />
        <TextField
          label="Item Name"
          variant="outlined"
          name="itemName"
          value={itemName}
          onChange={e => setItemName(e.target.value)} 
          required
          fullWidth
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)} 
            required
          >
            <MenuItem value="Appetizer">Appetizer</MenuItem>
            <MenuItem value="Main Course">Main Course</MenuItem>
            <MenuItem value="Dessert">Dessert</MenuItem>
            <MenuItem value="Beverage">Beverage</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Price"
          variant="outlined"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)} 
          type="number"
          required
          fullWidth
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)} 
          multiline
          rows={4}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth onClick = {handleReview}>
          Add to Menu
        </Button>
      </form>
    </div>
  );
};


export default Customisationm;
