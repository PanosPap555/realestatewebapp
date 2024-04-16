import React from 'react';
import "./css//Home.css"

export default function Home({ authenticated, setPopupLogin, setPopupRegister }) {

    const openPopupLogin = () => {
        setPopupLogin(true);
    };

    const openPopupRegister = () => {
        setPopupRegister(true);
    };

    return (
        <div className="home">
            <div className='explore-div'>
                <div className='explore-text'>Explore <span className='premium-text' >Premium</span> Real Estate</div>
            </div>
            {authenticated ? (
                <></>
            ) : (
                <div className='not-auth-text'>
                    <div>Discover your new home or your next investment! <span onClick={openPopupRegister} className='register-an'>Sign Up!</span></div>
                    <div>Allready a member? <span onClick={openPopupLogin} className='login-an'>Log In!</span></div>
                </div>
            )}
        </div>
    )
}
