import React from 'react';
import "./css/ListingDetailsPopup.css"

export default function ListingDetailsPopup({ onClose }) {
    return (
        <div className="popup listing-details-popup">
            <div className="popup-content">
                <div className='listing-details-text'>Listing Details!</div>
                <hr />
                <div className='listing-details'>
                    <div className='listing-image'>
                        <img src='src\Server\Pics\1.jpg' alt='Listing Image' />
                    </div>
                    <div className='listing-info'>
                        <div className='listing-title'>Listing Title</div>
                        <div className='listing-description'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdfffffffffffffffffffafsafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <div className='listing-price'>Listing Price</div>
                    </div>
                </div>
                <div className='btns'>
                    <button type="button" className="btn btn-dark close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}