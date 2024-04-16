import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./css/ListingDetailsPopup.css"

export default function ListingDetailsPopup({ onClose, title, description, price }) {
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetchDetails(1);
        
    }, [])

    const fetchDetails = async (id) => {
        
        console.log(id)
        try {
            const response = await axios.get("http://localhost:8080/details", {
                params: {
                    id: id
                }
            });

            if (response.data.errorCode === null) {
                setAddress(response.data.address);
                setLatitude(response.data.latitude);
                setLongitude(response.data.longitude);
                setUsername(response.data.username);
                setEmail(response.data.email);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="popup listing-details-popup">
            <div className="popup-content">
                <div className='listing-details-text'>Listing Details!</div>
                <hr />
                <div className='listing-details'>
                    <div className='listing-image'>
                        <img src='.\Server\Pics\1.jpg' />
                    </div>
                    <div className='listing-info'>
                        <div className='listing-title'>{address}</div>
                        <div className='listing-description'>asdasdasf</div>
                        <div className='listing-price'>Listing Price</div>
                        <div className='latitude'>{latitude}</div>
                        <div className='longitude'>{longitude}</div>
                    </div>
                </div>
                <div className='btns'>
                    <button type="button" className="btn btn-dark close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );



}


