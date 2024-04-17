import React from 'react'
import axios from 'axios'
import "./css/AddListing.css"

function AddListing( onClose, setAuthenticated, setId, setTitle, setDescription, setAddress, setPrice, setLatitude, setLongitude, setImageData) {

    const setMessage = (message) => {
        document.querySelector(".message-label").textContent = message
    };

    const getMessage = () => {
        return document.getElementById("message-label").value
    }

    const getId = () => {
        return document.getElementById("id").value
    };

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

    const handleListingAddition = async (e) => {
        e.preventDefault()
        try {
            /* make request */
            const response = await axios.post("http://localhost:8080/add-listing", {
                id: getId(),
                title: getTitle(),
                description: getDescription(),
                address: getAddress(),
                price: getPrice(),
                latitude: getLatitude(),
                longtitude: getLongitude(),
                imageData: getImageData()
            })

            if (!response.data.errorCode) {
                setId(getId())
                setTitle(getTitle())
                setDescription(getDescription())
                setAddress(getAddress())
                setPrice(getPrice())
                setLatitude(getLatitude())
                setLongitude(getLongitude())
                setImageData(getImageData())
                onClose()
                return
            }

            /* handle error */
            setMessage(response.data.errorCode)
        }
        catch (ex) {
            setMessage("Unable to Add Listing. Try again in another millenia.")
        }
    }


    return (
        <div className='add-listing-wrapper'>
            Hello World!
        </div>
    );
}

export default AddListing;