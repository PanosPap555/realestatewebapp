import React from 'react';


const Listing = ({ listing, setPopupDetails, setId, setTitle, setDescription, setPrice }) => {

    const openPopupDetails = () => {
        setId(listing.id);
        setTitle(listing.title);
        setDescription(listing.description);
        setPrice(listing.price);
        setPopupDetails(true);
    };

    return (
        <div>
            <p>{listing.id}</p>
            <p>{listing.title}</p>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
            <div>
                <img src={`data:image/jpeg;base64,/9j/${listing.imageData}`} alt="Real Estate" />
            </div>
            <button onClick={openPopupDetails} className='login-an'>details</button>

        </div>
    );
};

export default Listing;
