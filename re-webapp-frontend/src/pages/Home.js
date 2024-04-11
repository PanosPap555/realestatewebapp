import React, { useState } from 'react';
import PopupRegister from '../components/PopupRegister'
import PopupLogin from '../components/PopupLogin'
import "./Home.css"

export default function Home({ authenticated, setAuthenticated, setUsername }) {

    const [popupLoginVisible, setPopupLoginVisible] = useState(false);
    const [popupRegisterVisible, setPopupRegisterVisible] = useState(false);

    const openPopupLogin = () => {
        setPopupLoginVisible(true);
    };

    const closePopupLogin = () => {
        setPopupLoginVisible(false);
    };

    const openPopupRegister = () => {
        setPopupRegisterVisible(true);
    };

    const closePopupRegister = () => {
        setPopupRegisterVisible(false);
    };

    return (
        <div className="home">
            <div className='welcome-div'>
                <div className='welcome'>Explore <span className='premium' >Premium</span> Real Estate</div>
            </div>
            {authenticated ? (
                <></>
            ) : (
                <>
                    {popupLoginVisible && ( <PopupLogin onClose={closePopupLogin} setAuthenticated={setAuthenticated} setUsername={setUsername} /> )}
                    {popupRegisterVisible && ( <PopupRegister onClose={closePopupRegister} setAuthenticated={setAuthenticated} setUsername={setUsername} /> )} 
                    <div className='message'>
                        <div>Discover your new home or your next investment! <span onClick={openPopupRegister} className='register-an'>Sign Up!</span></div>
                        <div>Allready a member? <span onClick={openPopupLogin} className='login-an'>Log In!</span></div>
                    </div>
                </>
            )}
            <div className="overlay" />
        </div>
    )
}
