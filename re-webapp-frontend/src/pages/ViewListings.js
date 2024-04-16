import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./css/ViewListing.css"

export default function ViewListing({ query, pageNumber }) {
    const [listings, setListings] = useState([]);
    const [componentMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        setComponentMounted(true);
        const fetchListings = async() => {
        console.log("useEffect executed");
        try {
            const response = await axios.get(`http://localhost:8080/results/${query}/${pageNumber}`);
            console.log(response.data)
            if (response.data.errorCode === null) {
                setListings(response.data);
            }
        } catch (error) {
            console.error(error);
          }
        }
        if (componentMounted) {
            fetchListings();
          }
    },[query, pageNumber, componentMounted])

    return (
        <div className="listing-page">
            {listings.map((listing) => (
                <div className="listing" key={listing.id}>
                    <div className='listing-image'>
                        <img src={`./Server/Pics/1.jpg`} alt={listing.title} />
                    </div>
                    <div className='listing-info'>
                        <div className='listing-title'>{listing.title}</div>
                        <div className='listing-description'>{listing.description.slice(0, 100)}...</div>
                        <div className='listing-price'>${listing.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );

}