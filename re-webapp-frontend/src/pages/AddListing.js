import React from 'react'
import axios from 'axios'
import "./css/AddListing.css"

function AddListing() {

    const setMessage = (message) => {
        document.querySelector(".message-label").textContent = message
    };

    const getMessage = () => {
        return document.getElementById("message-label").value
    }

    const getUsername = () => {
        return document.getElementById("username").value
    };

    const getEmail = () => {
        return document.getElementById("email").value
    };

    const getPassword = () => {
        return document.getElementById("password").value
    };

    const getPasswordRepeat = () => {
        return document.getElementById("password-repeat").value
    };

    return (
        <div className='add-listing-wrapper'>
            
        </div>
    );
}

export default AddListing;