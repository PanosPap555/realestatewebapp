import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/ViewUser.css";

function ViewUser({ username }) {
  const [email, setEmail] = useState("");
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    setComponentMounted(true);
    console.log("RUNNING");
    const fetchDetails = async () => {
      console.log("useEffect executed");
      try {
        const response = await axios.get(`http://localhost:8080/email/${username}`);
        console.log(response.data.email);
        if (!response.data.error) {
          setEmail(response.data.email);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (componentMounted) {
      fetchDetails();
    }

  }, [username, componentMounted]);

  const user = {
    username: username,
    email: email
  };

  return (
    <div className="view-user-wrapper">
      <div className="view-r-container">
        <h1 className="view-user-heading">Profile Page</h1>
        <p className="view-user-username">Username: {user.username}</p>
        <p className="view-user-email">Email: {user.email}</p>
        <Link to="/ViewUserListing" className="view-listing-button">View Listings</Link>
      </div>
    </div>
  );
}

export default ViewUser;