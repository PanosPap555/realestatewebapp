import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Listing from '../components/Listing';
import './css/ViewListing.css'

export default function ViewListings({ setPopupDetails, setId, setTitle, setDescription, setPrice, setImageData }) {

    const navigate = useNavigate();

    let { username, pageNumber } = useParams();
    pageNumber = parseInt(pageNumber);

    const [listings, setListings] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user-listings/${username}/${pageNumber}`);
            setListings(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
            return
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

        fetchData();
    }, [[pageNumber]]);

    const goToPage = (page) => {
        navigate(`/user-listings/${username}/${page}`);
    };

    return (
        <div  >
            {listings && (
            <div className="view-user-listing-wrapper">
                {listings.map((listings, index) => (
                    <div key={index} className="listing-container">
                        <Listing listing={listings} setPopupDetails={setPopupDetails} setId={setId} setTitle={setTitle} setDescription={setDescription} setPrice={setPrice} setImageData={setImageData} />
                    </div>
                ))}
            </div>
            )}
            <div className="buttons-wrapper">
                <button className="prev-button" onClick={() => goToPage(Math.max(pageNumber - 1, 0))}>Previous</button>
                <button className="next-button" onClick={() => goToPage(Math.min(pageNumber + 1, 5))}>Next</button>
            </div>
        </div>
    )
}