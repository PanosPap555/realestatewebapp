import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {

  let pageNumber = 0

  const navigate = useNavigate();

  const getQuery = () => {
    return document.getElementById("query").value
  };

  const handleSearch = async (e) => {
    navigate(`/results/${getQuery()}/${pageNumber}/`)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" placeholder="Search" id="query" required />
        <button type="submit" className='btn-dark search-bnt'> Search</button>
      </form>
    </div>
  );
}

export default Search;