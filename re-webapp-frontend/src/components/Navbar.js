import React from 'react';
import "./Navbar.css"

export default function Navbar({ authenticated, username }) {
    return (
        <nav className={`navbar ${authenticated ? 'navbar-auth' : ''}`}>
            <a href="/" className='company-name'>Real Estate Web App</a>
            {authenticated ? (
                <div className='profile'>
                    <a href="/" className='username'>{username}</a>
                    <a href="/"><img className='profile-pic' src="/img/default_user_image.png" alt="Profile" /></a>
                </div>
            ) : (
                <></>
            )}

        </nav>
    )
}
