import { PropTypes } from "prop-types";

import "./LocationCard.css";

const LocationCard = ({ location, handleSelectedLocation, removeLocation }) => {
    return (
        <div
            className="location-card"
            onClick={(ev) => {
                ev.stopPropagation();
                handleSelectedLocation(location);
            }}
        >
            <p className="country">{location.country}</p>
            <h2 className="name">{location.name}</h2>
            <button
                onClick={(ev) => {
                    ev.stopPropagation();
                    removeLocation(location.id);
                }}
            >
                Remove Location
            </button>
        </div>
    );
};

LocationCard.propTypes = {
    location: PropTypes.object.isRequired,
    handleSelectedLocation: PropTypes.func.isRequired,
    removeLocation: PropTypes.func.isRequired,
};

export default LocationCard;
