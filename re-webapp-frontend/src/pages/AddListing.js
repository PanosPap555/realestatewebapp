import React, {useState} from 'react'
import axios from 'axios'
import "./css/AddListing.css"

function AddListing({ authenticated, username }) {
    const [baseImage, setBaseImage] = useState("");


    const setMessage = (message) => {
        document.querySelector(".message-label").textContent = message
    };

    const getMessage = () => {
        return document.getElementById("message-label").value
    }

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
                username: localStorage.getItem("username"),
                title: getTitle(),
                description: getDescription(),
                address: getAddress(),
                price: parseFloat(getPrice()),
                latitude: parseFloat(getLatitude()),
                longitude: parseFloat(getLongitude()),
                image_data: baseImage
            })
            if (!response.data.errorCode) {
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
                document.getElementById("address").value = "";
                document.getElementById("price").value = "";
                document.getElementById("latitude").value = "";
                document.getElementById("longitude").value = "";
                //document.getElementById("image_data").value = "";
                handleClose();
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


    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        const base64Data = base64.split(',')[1];
        console.log(base64Data)
        setBaseImage(base64Data);
    };

    return (
        <div className='add-listing-wrapper'>
            <div className='title-label'>Please Insert Listing Info</div>
            <hr></hr>
            <form onSubmit={(e) => handleListingAddition(e)}>
                <div className="text-input">
                    <label htmlFor="title" className="form-label">Title</label> {/* Title */}
                    <input placeholder="Title" type="text" className="form-control" id="title" required />
                </div>
                <div className="text-input-description">
                    <label htmlFor="description" className="form-label">Description</label> {/* Description */}
                    <textarea placeholder="Description" type="text" className="form-control-description" id="description" required />
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
                <div className="image-input">
                    <label htmlFor="image_data" className="form-label">ImageData</label>
                    <div>
                        <input
                            type="file"
                            onChange={(e) => {
                                uploadImage(e);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="message-label" id="message-label"></label>
                </div>
                <button type="submit" className="btn btn-dark register-btn">Add Listing</button>
                <button type="button" className="btn btn-dark close-btn" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddListing;