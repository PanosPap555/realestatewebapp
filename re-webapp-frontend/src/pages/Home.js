import React from 'react';
import "./css//Home.css"

export default function Home({ authenticated, setPopupLogin, setPopupRegister, username }) {

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
                <div className='auth-welcome'>
                    <div>Welcome aboard <span className={'auth-highlight-username'}>{username}</span>!</div>
                </div>
            ) : (
                <div className='not-auth-text'>
                    <div>Discover your new home or your next investment! <span onClick={openPopupRegister} className='register-an'>Sign Up!</span></div>
                    <div>Already a member? <span onClick={openPopupLogin} className='login-an'>Log In!</span></div>
                </div>
            )}
        </div>
    )
}
