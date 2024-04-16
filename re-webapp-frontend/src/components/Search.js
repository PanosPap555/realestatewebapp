import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/listing?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Filter your search please."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;