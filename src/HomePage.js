import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const history = useNavigate();
  const destinations = ['Beach Paradise', 'Mountain Retreat', 'City Adventure'];

  const handleDestinationSelected = (destination) => {
    history(`/subscription?destination=${encodeURIComponent(destination)}`);
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
    </div>
  );
};

export default HomePage;
