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
            checked={selectedOptions.includes('Option 1')}
            onChange={() => handleOptionChange('Option 1')}
          />
          Option 1
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Option 2')}
            onChange={() => handleOptionChange('Option 2')}
          />
          Option 2
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Option 3')}
            onChange={() => handleOptionChange('Option 3')}
          />
          Option 3
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Option 4')}
            onChange={() => handleOptionChange('Option 4')}
          />
          Option 4
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Option 5')}
            onChange={() => handleOptionChange('Option 5')}
          />
          Option 5
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Option 6')}
            onChange={() => handleOptionChange('Option 6')}
          />
          Option 6
        </label>
        </div>
        <button onClick={handleContinue}>Continue</button>
      </Modal>
    </div>
  );
};

export default HomePage;
