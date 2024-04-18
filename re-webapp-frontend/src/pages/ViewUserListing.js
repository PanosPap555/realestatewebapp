import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Listing from '../components/Listing';
import './css/ViewListing.css'

export default function ViewListings() {

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
    }, []);

    const goToPage = (page) => {
        navigate(`/user-listings/${username}/${page}`);
    };

    return (
        <div>
            <div className="view-user-listing-wrapper">
                {listings && (
                    <div className="listing-container">
                        {listings.map((listing, index) => (
                            <div className="listing-item" key={index}>
                                <h3>{listing.title}</h3>
                                <div className="image-container">
                                    <img src={listing.imageUrl} alt={listing.title} />
                                </div>
                                <p>{listing.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button className="prev-button" onClick={() => goToPage(pageNumber - 1)}>Previous</button>
                <button className="next-button" onClick={() => goToPage(pageNumber + 1)}>Next</button>
            </div>
        </div>
    );
}