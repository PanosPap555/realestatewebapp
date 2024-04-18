import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import PopupRegister from './components/PopupRegister'
import PopupLogin from './components/PopupLogin'
import PopupUser from './components/PopupUser'
import Home from './pages/Home'
import ViewUser from './pages/ViewUser'
import ViewUserListing from './pages/ViewUserListing'
import AddListing from './pages/AddListing'
import ViewListings from './pages/ViewListings'

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('Username');

  /* popups */
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupRegister, setPopupRegister] = useState(false);
  const [popupUser, setPopupUser] = useState(false);

  const closePopupLogin = () => {
    setPopupLogin(false);
  }

  const closePopupRegister = () => {
    setPopupRegister(false);
  }

  const closePopupUser = () => {
    setPopupUser(false);
  }

  /** check if valid token already exists */
  const checkToken = async () => {
    /** check if token exists in local storage */
    if (!localStorage.getItem('token')) { return }
    try {
      /** check if token is valid */
      const response = await axios.post("http://localhost:8080/home", {
        token: localStorage.getItem('token')
      })

      if (response.data.errorCode === null) {
        /** apply jwtoken to all http requests (resets after reload) */
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        setUsername(localStorage.getItem('username'))
        setAuthenticated(true)
      }
    }
    catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <>
      <div className="App">
        <div className="overlay" />
        <Navbar authenticated={authenticated} username={username} setPopupUser={setPopupUser} />
        <Router>
          {popupLogin && (<PopupLogin onClose={closePopupLogin} setAuthenticated={setAuthenticated} setUsername={setUsername} />)}
          {popupRegister && (<PopupRegister onClose={closePopupRegister} setAuthenticated={setAuthenticated} setUsername={setUsername} />)}
          {popupUser && (<PopupUser onClose={closePopupUser} setAuthenticated={setAuthenticated} username={username} />)}
          {popupLogin || popupRegister || popupUser ? (<div className="overlay-popup" />) : null}
          <Routes>
            <Route
              path="/"
              element={<Home authenticated={authenticated} setPopupLogin={setPopupLogin} setPopupRegister={setPopupRegister} username={username} />}
            />
            <Route
              path="/profile"
              element={<ViewUser />}
            />
            <Route
              path="/results/:query/:pageNumber"
              element={<ViewListings />} />
            <Route
              path="/user-listings/:username/:pageNumber"
              element={<ViewUserListing />}
            />







            

            <Route
              path="/AddListing"
              element={<AddListing authenticated={authenticated} username={username} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
