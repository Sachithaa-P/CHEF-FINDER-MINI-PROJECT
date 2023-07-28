import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const handleButton1Click = () => {
    // Add your logic for handling Button 1 click here
    window.alert("Successfully Logged In as User");
    console.log('Button 1 clicked!');
  };

  const handleButton2Click = () => {
    // Add your logic for handling Button 2 click here
    console.log('Button 2 clicked!');
  };
  const handleButton3Click = () => {
    // Add your logic for handling Button 2 click here
    console.log('Button 3 clicked!');
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f0f0f0',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#e0e0e0',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>SELECT</h2>
      <form style={styles.form}>
        {/* Add any other form elements here if needed */}
        <Link to="/Home"><button type="button" style={styles.button} onClick={handleButton1Click}>
          USER
        </button></Link>
        <Link to="/Chef/Homec"> <button type="button" style={styles.button} onClick={handleButton2Click}>
          CHEF
        </button></Link>
        <Link to="/Chef/Admin"> <button type="button" style={styles.button} onClick={handleButton2Click}>
          ADMIN DASHBOARD
        </button></Link>
      </form>
    </div>
  );
};

export default User;
