import React, { useState } from 'react';
import "./Customiseform.css";
import Button from '@mui/material/Button';


const Customiseform = () => {
  const [customizations, setCustomizations] = useState({
    pizza: [],
    burger: [],
    salad: [],
  });

  const handleCustomizationChange = (dish, option) => {
    setCustomizations((prevCustomizations) => ({
      ...prevCustomizations,
      [dish]: prevCustomizations[dish].includes(option)
        ? prevCustomizations[dish].filter((item) => item !== option)
        : [...prevCustomizations[dish], option],
    }));
  };

  return (
    <div>
      <h2>Food Menu Customization</h2>
      <h3>Pizza</h3>
      <label>
        <input
          type="checkbox"
          checked={customizations.pizza.includes('Pepperoni')}
          onChange={() => handleCustomizationChange('pizza', 'Pepperoni')}
        />
        Pepperoni
      </label>
      <label>
        <input
          type="checkbox"
          checked={customizations.pizza.includes('Mushrooms')}
          onChange={() => handleCustomizationChange('pizza', 'Mushrooms')}
        />
        Mushrooms
      </label>
      {/* Add more pizza toppings here */}
      
      <h3>Burger</h3>
      <label>
        <input
          type="checkbox"
          checked={customizations.burger.includes('Cheese')}
          onChange={() => handleCustomizationChange('burger', 'Cheese')}
        />
        Cheese
      </label>
      <label>
        <input
          type="checkbox"
          checked={customizations.burger.includes('Lettuce')}
          onChange={() => handleCustomizationChange('burger', 'Lettuce')}
        />
        Lettuce
      </label>
      {/* Add more burger toppings here */}
      
      <h3>Salad</h3>
      <label>
        <input
          type="checkbox"
          checked={customizations.salad.includes('Tomatoes')}
          onChange={() => handleCustomizationChange('salad', 'Tomatoes')}
        />
        Tomatoes
      </label>
      <label>
        <input
          type="checkbox"
          checked={customizations.salad.includes('Cucumbers')}
          onChange={() => handleCustomizationChange('salad', 'Cucumbers')}
        />
        Cucumbers
      </label>
      {/* Add more salad options here */}
      
      {/* You can add more types of dishes and their customizations here */}
    </div>
  );
};

export default Customiseform;
