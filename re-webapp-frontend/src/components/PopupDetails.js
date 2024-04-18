import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./css/PopupDetails.css"

export default function PopupDetails({ onClose, id, title, description, price, imageData }) {
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const fetchDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/details/${id}`);
            setAddress(response.data.address);
            setLatitude(response.data.latitude);
            setLongitude(response.data.longitude);
            setUsername(response.data.username);
            setEmail(response.data.email);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [])

    return (
        <div className="popup listing-details-popup">
            <div className="popup-content">
                <div className='listing-details-text'>Listing Details!</div>
                <hr />
                <div className='listing-details'>
                    <div className='listing-image'>
                        image here
                    </div>
                    <div className='listing-info'>
                        <div className='listing-id'>{id}</div>
                        <div className='listing-title'>{title}</div>
                        <div className='listing-description'>{description}</div>
                        <div className='listing-price'>{price}</div>
                        <div className='listing-address'>{address}</div>
                        <div className='listing-latitude'>{latitude}</div>
                        <div className='listing-longitude'>{longitude}</div>
                        <div className='user-username'>{username}</div>
                        <div className='user-username'>{email}</div>
                    </div>
                </div>
                <div className='btns'>
                    <button type="button" className="btn btn-dark close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}