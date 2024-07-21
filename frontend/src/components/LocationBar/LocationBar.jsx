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

export default LocationBar;
