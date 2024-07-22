import { PropTypes } from "prop-types";

import "./LocationBar.css";

import LocationCard from "../LocationCard/LocationCard";

const LocationBar = ({ locations, handleSelectedLocation, removeLocation }) => {
    return (
        <section className="location-bar">
            {locations.map((location) => (
                <LocationCard
                    key={location.id}
                    location={location}
                    handleSelectedLocation={handleSelectedLocation}
                    removeLocation={removeLocation}
                />
            ))}
        </section>
    );
};

LocationBar.propTypes = {
    locations: PropTypes.array.isRequired,
    handleSelectedLocation: PropTypes.func.isRequired,
    removeLocation: PropTypes.func.isRequired,
};

export default LocationBar;
