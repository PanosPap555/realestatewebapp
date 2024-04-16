import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingDetailsPopup from './ListingDetailsPopup';

export default function Details() {
  const [data, setData] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Details');
        const jsonData = response.data;
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListings();
  }, []);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="details-container">
      <h1 className="details-title">Details</h1>
      <div className="details-content">
        <img src="https://via.placeholder.com/500x300" alt="Listing" className="details-image" />
        <div className="details-info">
          <h2>Listing Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          <p>Price: $100,000</p>
          <p>Location: New York, NY</p>
        </div>
      </div>
      <div className="details-actions">
        <button className="details-button" onClick={openPopup}>
          View Details
        </button>
        <button className="details-button">Previous</button>
        <button className="details-button">Next</button>
      </div>
      <ListingDetailsPopup isOpen={isPopupOpen} onClose={closePopup} listing={data} />
    </div>
  );
}