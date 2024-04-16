import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";


function ViewUser({ username, email }) {
  const user = {
    username: username,
    email: email
  };

  return (
    <div className="view-r-container">
      <h1 className="view-user-heading">Profile Page</h1>
      <p className="view-user-username">Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/ViewListing" className="view-user-button">View Listings</Link>
    </div>
  );
}


export default ViewUser;