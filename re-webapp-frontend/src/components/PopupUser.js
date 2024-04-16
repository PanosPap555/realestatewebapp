import React from 'react'
import "./css/Popup.css"

export default function PopupUser({ onClose, setAuthenticated, username }) {

  const logout = () => {
    localStorage.clear()
    setAuthenticated(false)
    onClose()
  }

  return (
    <div className="popup user-popup">
      <div className='login-text'>{username}</div>
      <hr />
      <div className="popup-content user-popup-content">
        <div><button type="button" className="btn btn-dark login-btn">View Profile</button></div>
        <div><button type="button" className="btn btn-dark login-btn">Add Listing</button></div>
        <div><button type="button" className="btn btn-dark login-btn" onClick={logout}>Log Out</button></div>
        <div><button type="button" className="btn btn-dark close-btn" onClick={onClose}>Close</button></div>
      </div>
    </div>
  )
}
