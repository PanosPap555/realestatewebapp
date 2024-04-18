import React from 'react';


const Listing = ({ listing }) => {
    if (!listing) {
        console.log(listing)
        return <div>Loading...</div>;
    }




    return (
        <div>
            <p>{listing.id}</p>
            <p>{listing.title}</p>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
            <div>
                <img src={`data:image/jpeg;base64,/9j/${listing.imageData}`} alt="Real Estate" />
            </div>

        </div>
    );
};

export default Listing;
