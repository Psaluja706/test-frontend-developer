import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SubscriptionPage = () => {
  const location = useLocation();
  const history = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedDestination = queryParams.get('destination');

  const handlePurchase = () => {
    history('/content-access');
  };

  return (
    <div>
      <h2>Subscription Page</h2>
      <p>Here's a sneak peek of your selected destination's itinerary:</p>
      <div>{selectedDestination}</div>
      <button onClick={handlePurchase}>Purchase Full Itinerary</button>
    </div>
  );
};

export default SubscriptionPage;
