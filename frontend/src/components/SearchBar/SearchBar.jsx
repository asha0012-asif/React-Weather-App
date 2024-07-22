import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ addLocation, setErrorMessage }) => {
    const [location, setLocation] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (!location || location.length < 3) {
            setErrorMessage(
                "Please enter in a location with at least 3 characters."
            );
            return;
        }

        fetchLocationData();
    };

    const fetchLocationData = async () => {
        try {
            // temp | place API key in a .env file
            const API_KEY = "b6cc0904a93ea4025e0862ff666ab903";

            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch location data. Please try again."
                );
            }

            const data = (await response.json())[0];

            if (!data) {
                throw new Error("Please enter in a valid location.");
            }

            const newLocation = {
                id: crypto.randomUUID(),
                lat: data.lat,
                lng: data.lon,
                country: data.country,
                state: data.state,
                name: data.name,
            };

            addLocation(newLocation);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            // clear input field
            setLocation("");
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">City, Province, Country</label>
                <input
                    type="search"
                    id="location"
                    name="location"
                    placeholder="City, Province, Country"
                    value={location}
                    onChange={(ev) => {
                        setLocation(ev.target.value);
                    }}
                />

                <button>Find Location</button>
            </form>
        </section>
    );
};

export default SearchBar;
