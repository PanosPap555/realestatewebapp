import React, { useState } from 'react';
import "./css//Home.css"
import ListingDetailsPopup from '../components/ListingDetailsPopup';

export default function Home({ authenticated, setPopupLogin, setPopupRegister }) {
    const [showListingDetails, setShowListingDetails] = useState(false);

    const openPopupLogin = () => {
        setPopupLogin(true);
    };

    const openPopupRegister = () => {
        setPopupRegister(true);
    };

    const openListingDetails = () => {
        setShowListingDetails(true);
    };

    const closeListingDetails = () => {
        setShowListingDetails(false);
    };

    return (
        <div className="home">
            <div className='explore-div'>
                <div className='explore-text'>Explore <span className='premium-text' >Premium</span> Real Estate</div>
            </div>
            {authenticated? (
                <>
                <div><button type="button" className="btn btn-dark " onClick={openListingDetails}>View Details</button></div>
                {showListingDetails && <ListingDetailsPopup onClose={closeListingDetails} />}
                </>
            ) : (
                <div className='not-auth-text'>
                    <div>Discover your new home or your next investment! <span onClick={openPopupRegister} className='register-an'>Sign Up!</span></div>
                    <div>Allready a member? <span onClick={openPopupLogin} className='login-an'>Log In!</span></div>
                </div>
            )}
        </div>
    )
}