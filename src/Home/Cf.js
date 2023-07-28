import React, { useState } from 'react';
import './Cf.css';

const Cf = () => {
  const [showModal, setShowModal] = useState(false);
  const [chefName, setChefName] = useState('');
  const [ChefId, setChefId] = useState('');
  const [Specialty, setSpecialty] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Experience, setExperience] = useState('');
  const [Charge, setCharge] = useState('');

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to the server
    console.log('Chef Id:', ChefId);
    console.log('Chef Name:', chefName);
    console.log('Specialty:', Specialty);
    console.log('Email:', Email);
    console.log('Address:', Address);
    console.log('Experience:', Experience);
    console.log('Charge:', Charge);
    handleModalClose();
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Add Chef Details</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
            <label htmlFor="ChefId">Chef Id:</label>
              <input
                type="text"
                id="ChefId"
                value={ChefId}
                onChange={(e) => setChefId(e.target.value)}
                required
              />
              <label htmlFor="chefName">Chef Name:</label>
              <input
                type="text"
                id="chefName"
                value={chefName}
                onChange={(e) => setChefName(e.target.value)}
                required
              />

              <label htmlFor="Specialty">Specialty:</label>
              <input
                type="text"
                id="Specialty"
                value={Specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
              />
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                id="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label htmlFor="Experience">Experience</label>
              <input
                type="text"
                id="Experience"
                value={Experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
              <label htmlFor="Charge">Charge</label>
              <input
                type="text"
                id="Charge"
                value={Charge}
                onChange={(e) => setCharge(e.target.value)}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cf;
