import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('Username');

  /* init */
  useEffect(() => {

    /* check if user already has valid token */
    const checkToken = async () => {
      /* check if token exists in local storage */
      if (!localStorage.getItem('token')) {
        return
      }

      try {
        /* make request */
        const response = await axios.post("http://localhost:8080/home", { token: localStorage.getItem('token') })

        if (response.data.errorCode === null) {
          /* apply jwtoken to all http requests (resets after reload) */
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          setUsername(localStorage.getItem('username'))
          setAuthenticated(true)
        }
      }
      catch (ex) { }
    };

    checkToken();

  }, [])

  return (
    <div className="App">
      <Navbar authenticated={authenticated} username={username} />
      <Home authenticated={authenticated} setAuthenticated={setAuthenticated} setUsername={setUsername} />
    </div>
  );
}

export default App;
