import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ListingDetailPopup from './ListingDetailPopup';


function ViewUserListing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="button-wrapper">
      {isPopupOpen && <ListingDetailPopup onClose={togglePopup} />}
      <button onClick={togglePopup}>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
}

export default ViewUserListing;