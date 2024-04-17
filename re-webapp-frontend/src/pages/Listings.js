import React from 'react';


const Listings = ({ listings }) => {
    if (!listings) {
        return <div>Loading...</div>;
    }




    return (
        <div>
            <p>{listings.id}</p>
            <p>{listings.title}</p>
            <p>{listings.description}</p>
            <p>{listings.price}</p>
            <div>
                asdasfadsfgf
                <img src={`data:image/jpeg;base64,/9j/${listings.imageData}`} alt="Real Estate" />
            </div>

        </div>
    );
};

export default Listings;
