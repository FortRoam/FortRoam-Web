import React from "react";
import { useEffect, useState } from 'react';
import { useLocation ,Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import axios from 'axios';
import detailImage from '../assets/HotelPhoto/fortprinters.jpg';
import ContactCard from '../components/detailContact/detailContact';
import StarRating from "../components/StarRating/StarRating";
import Footer from "../components/Footer/Footer";

const DetailPage = () => {

    const [place, setPlace] = useState({});
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:3010/place/${path}`);
            setPlace(res.data);
        }
        getPost();
    }, [path]);


    return (
        <div>
            <div className="placeDetail">
                <img src={detailImage} />
                <h1>{place.title}</h1>
                <div>
                    <p>{place.description}</p>
                </div>
                <div className="detail-contact-container">
                    <h1>Contact Us</h1>
                    <div className="detail-contact-cards">
                        <ContactCard
                            title="Phone Number"
                            value="123-456-7890"
                            icon={<FaPhone />}
                        />
                        <ContactCard
                            title="Address"
                            value="123 Main St, City, Country"
                            icon={<FaMapMarkerAlt />}
                        />
                        <ContactCard
                            title="Facebook"
                            value="www.example.com"
                            icon={<FaGlobe />}
                        />
                    </div>
                </div>
                <div className="detail-review">
                    <StarRating rating={place.review} />
                </div>
                <div className="view-more-button">
                    <Link to='https://en.wikipedia.org/wiki/Galle_Fort' className="view-more-link">View More Details</Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DetailPage;



// import React from "react";
// import data from "../components/places/places.jsx";

// const DetailPage = ({ match }) => {
//     // Extracting place id from URL params
//     const { id } = match.params;
//     // Fetching place details based on the id
//     // For example, you can fetch the details from your data or API
//     const placeDetails = data.place.find(place => place.id === id);

//     return (
//         <div className="detail-page">
//             <h2>{placeDetails.title}</h2>
//             <img src={require(`../assets/placeImages/${placeDetails.image}`)} alt={placeDetails.title} />
//             <p>{placeDetails.description}</p>
//             <p>Location: {placeDetails.street}</p>
//             <p>Review: {placeDetails.review}</p>
//             {/* Add more details as needed */}
//         </div>
//     );
// };

// export default DetailPage;
