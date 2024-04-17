import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listings from './Listings';

export default function ViewListings() {
    const [listings, setListings] = useState([]);
    const [query, setQuery] = useState('Home');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            console.log("useEffect executed");
            try {
                const response = await axios.get(`http://localhost:8080/results/${query}/${pageNumber}`);
                console.log(response.data);

                // Update listings state with the fetched data
                setListings(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [query, pageNumber]);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handlePageNumberChange = (event) => {
        setPageNumber(event.target.value);
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleQueryChange} placeholder="Search..." />
            <input type="number" value={pageNumber} onChange={handlePageNumberChange} placeholder="Page number..." />
            {listings && (
                <div>
                    {listings.map((listing, index) => ( // Added index as the second argument
                        <Listings key={index} listings={listing} /> // Used index as the key
                    ))}
                </div>
            )}
        </div>
    );
}

/*<div>
      {listings.map((item) => (
        <Listing key={item} item={`Listing ${item}`} />
      ))}
    </div>*/