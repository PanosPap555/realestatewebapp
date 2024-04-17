import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <p>Searched term: {searchTerm}</p>
    </div>
  );
}

export default Search;