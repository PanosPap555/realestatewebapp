import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Listing from '../components/Listing';

export default function ViewListings({setPopupDetails, setId, setTitle, setDescription, setPrice, setImageData}) {

    const navigate = useNavigate();

    let { query, pageNumber } = useParams();
    pageNumber = parseInt(pageNumber);

    const [listings, setListings] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/results/${query}/${pageNumber}`);
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

    return (
        <div>
            {listings && (
                <div>
                    {listings.map((listings, index) => (
                        <Listing key={index} listing={listings} setPopupDetails={setPopupDetails} setId={setId} setTitle={setTitle} setDescription={setDescription} setPrice={setPrice} setImageData={setImageData}/>
                    ))}
                </div>
            )}
        </div>
    );
}