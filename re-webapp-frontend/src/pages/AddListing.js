import React from 'react'
import axios from 'axios'
import "./css/AddListing.css"

function AddListing({ onClose }) {

    const setMessage = (message) => {
        document.querySelector(".message-label").textContent = message
    };

    const getMessage = () => {
        return document.getElementById("message-label").value
    }

    /*const getId = () => {
        return document.getElementById("id").value
    };*/

    const getTitle = () => {
        return document.getElementById("title").value
    };

    const getDescription = () => {
        return document.getElementById("description").value
    };

    const getAddress = () => {
        return document.getElementById("address").value
    };

    const getPrice = () => {
        return document.getElementById("price").value
    };

    const getLatitude = () => {
        return document.getElementById("latitude").value
    };

    const getLongitude = () => {
        return document.getElementById("longitude").value
    };

    const getImageData = () => {
        return document.getElementById("image_data").value
    };

    const handleClose = () => {
        // Redirect to the main page
        window.location.href = "/";
    };

    const handleListingAddition = async (e) => {
        e.preventDefault()
        try {
            /* make request */
            const response = await axios.post("http://localhost:8080/add-listing", {
                //id: getId(),
                title: getTitle(),
                description: getDescription(),
                address: getAddress(),
                price: parseFloat(getPrice()),
                latitude: parseFloat(getLatitude()),
                longitude: parseFloat(getLongitude()),
                imageData: getImageData()
            })

            if (!response.data.errorCode) {
                return
            }

            /* handle error */
            setMessage(response.data.errorCode)
        }
        catch (ex) {
            console.log(ex);
            setMessage("Unable to Add Listing. Try again in another millenia.")
        }
    }


    return (
        <div className='add-listing-wrapper'>
            <div className='login-text'>Sign Up!</div>
            <hr></hr>
            <form onSubmit={(e) => handleListingAddition(e)}>
                <div className="text-input">
                    <label htmlFor="title" className="form-label">Title</label> {/* Title */}
                    <input placeholder="Title" type="text" className="form-control" id="title" required />
                </div>
                <div className="text-input">
                    <label htmlFor="description" className="form-label">Description</label> {/* Description */}
                    <input placeholder="Description" type="text" className="form-control" id="description" required />
                </div>
                <div className="text-input">
                    <label htmlFor="address" className="form-label">Address</label> {/* Address */}
                    <input placeholder="Address" type="text" className="form-control" id="address" required />
                </div>
                <div className="text-input">
                    <label htmlFor="price" className="form-label">Price</label> {/* Price */}
                    <input placeholder="Price" type="text" className="form-control" id="price" required />
                </div>
                <div className="text-input">
                    <label htmlFor="latitude" className="form-label">Latitude</label> {/* Latitude */}
                    <input placeholder="Latitude" type="text" className="form-control" id="latitude" required />
                </div>
                <div className="text-input">
                    <label htmlFor="longitude" className="form-label">Longitude</label> {/* Longitude */}
                    <input placeholder="Longitude" type="text" className="form-control" id="longitude" required />
                </div>
                <div className="text-input">
                    <label htmlFor="image_data" className="form-label">ImageData</label> {/* REMOVE THIS */}
                    <input placeholder="ImageData" type="text" className="form-control" id="image_data" required />
                </div>
                <div>
                    <label className="message-label" id="message-label"></label>
                </div>
                <button type="submit" className="btn btn-dark register-btn" onClick={handleClose}>Add Listing</button>
                <button type="button" className="btn btn-dark close-btn" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddListing;