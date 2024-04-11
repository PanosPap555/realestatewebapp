import React from 'react'
import axios from 'axios'
import "./Popup.css"

export default function PopupRegister({ onClose, setAuthenticated, setUsername }) {

    const setMessage = (message) => {
        document.querySelector(".message-label").textContent = message
    };

    const getUsername = () => {
        return document.getElementById("username").value
    };

    const getEmail = () => {
        return document.getElementById("email").value
    };

    const getPassword = () => {
        return document.getElementById("password").value
    };

    const getPasswordRepeat = () => {
        return document.getElementById("password-repeat").value
    };

    /* register */
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            /* make request */
            const response = await axios.post("http://localhost:8080/register", {
                username: getUsername(),
                email: getEmail(),
                password: getPassword(),
                passwordRepeat: getPasswordRepeat()
            })

            if(response.data.errorCode == null) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', getUsername())
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                setUsername(getUsername())
                setAuthenticated(true)
                onClose()
                return
            }

            /* handle error */
            setMessage(response.data.errorCode)
        }
        catch (ex) {
            setMessage("Unable to Sign Up. Try again later")
        }
    }

    return (
        <div className="popup register-popup">
            <div className="popup-content">
                <div className='login-text'>Sign Up!</div>
                <hr></hr>
                <form onSubmit={(e) => handleRegister(e)}>
                    <div className="mb-3">
                        <label htmlFor="input-username" className="form-label">Username</label>
                        <input placeholder="Username" type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-email" className="form-label">E-mail</label>
                        <input placeholder="E-mail" type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-password" className="form-label">Password</label>
                        <input placeholder="Password" type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-repeat-password" className="form-label">Repeat Password</label>
                        <input placeholder="Repeat Password" type="password" className="form-control" id="password-repeat" />
                    </div>
                    <div>
                        <label className="message-label"></label>
                    </div>
                    <button type="submit" className="btn btn-dark register-btn">Sign Up</button>
                    <button type="button" className="btn btn-dark close-btn" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
}