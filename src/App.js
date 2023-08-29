import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import SubscriptionPage from './SubscriptionPage';
import ContentAccessPage from './ContentAccessPage';

const HomePage = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const destinations = ['Beach Paradise', 'Mountain Retreat', 'City Adventure'];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDestinationSelected = (destination) => {
    setSelectedDestination(destination);
    openModal();
  };

  const handleContinue = () => {
    closeModal();
    history(`/subscription?destination=${encodeURIComponent(selectedDestination)}`);
  };
  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <h2>Find Your Dream Destination</h2>
      <p>Select your preferred travel destination:</p>
      {destinations.map((destination) => (
        <button key={destination} onClick={() => handleDestinationSelected(destination)}>
          {destination}
        </button>
      ))}
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Destination Questions"
      >
        <h3>Hey! Are you looking for help in planning your trip?</h3>
        <div className='flex flex-col'>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Yes! A romantic trip')}
            onChange={() => handleOptionChange('Yes! A romantic trip')}
          />
          Yes! A romantic trip
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Yes! For A family trip')}
            onChange={() => handleOptionChange('Yes! For A family trip')}
          />
          Yes! For A family trip
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Yes! FOR A honeymoon trip')}
            onChange={() => handleOptionChange('Yes! FOR A honeymoon trip')}
          />
          Yes! FOR A honeymoon trip
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('YES FOR A TRIP WITH MY FRIENDS')}
            onChange={() => handleOptionChange('YES FOR A TRIP WITH MY FRIENDS')}
          />
          YES FOR A TRIP WITH MY FRIENDS
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('For a Group Trip')}
            onChange={() => handleOptionChange('For a Group Trip')}
          />
          For a Group Trip
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('For a solo trip')}
            onChange={() => handleOptionChange('For a solo trip')}
          />
          For a solo trip
        </label>
        </div>
        <button onClick={handleContinue}>Continue</button>
      </Modal>
    </div>
  );
};

export default HomePage;
