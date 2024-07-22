import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import LocationBar from "./components/LocationBar/LocationBar";
import Weather from "./components/Weather/Weather";
import Loading from "./components/Loading/Loading";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";

const App = () => {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const addLocation = (newLocation) => {
        const isLocationAdded = locations.some(
            (location) => location.name === newLocation.name
        );

        if (locations.length > 5) {
            setErrorMessage("Only 6 locations can be added at a time.");
        } else if (isLocationAdded) {
            setErrorMessage(
                `"${newLocation.name}" is already added. Please select another location.`
            );
        } else {
            setLocations((locations) => [...locations, newLocation]);
        }
    };

    const removeLocation = (id) => {
        // keep all locations except the one with the given id
        setLocations((locations) =>
            locations.filter((location) => location.id !== id)
        );

        // clear weather data if the selected location is removed
        if (selectedLocation && selectedLocation.id === id) {
            setSelectedLocation(null);
            setWeatherData(null);
        }
    };

    const fetchWeatherData = async ({ lat, lng }) => {
        try {
            // temp | place API key in a .env file
            const API_KEY = "b6cc0904a93ea4025e0862ff666ab903";

            // clear previous weather data
            setWeatherData(null);

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();

            const weatherData = {
                name: data.name,

                temperature: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                maxTemperature: Math.round(data.main.temp_max),
                minTemperature: Math.round(data.main.temp_min),

                description: data.weather[0].main,
                icon: data.weather[0].icon,

                wind: {
                    speed: Math.round(data.wind.speed * 10),
                    gust: Math.round(data.wind.gust),
                },

                humidity: data.main.humidity,
                pressure: data.main.pressure / 10,
                visibility: Math.round((data.visibility / 1000) * 10) / 10,
                ceiling: "∞",

                sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
            };

            setWeatherData(weatherData);
        } catch (error) {
            setErrorMessage(error);
        }
    };

    const handleSelectedLocation = (location) => {
        setSelectedLocation(location);
        fetchWeatherData(location);
    };

    return (
        <div className="container">
            <Header />
            <SearchBar
                addLocation={addLocation}
                setErrorMessage={setErrorMessage}
            />
            {errorMessage && (
                <FeedbackBar
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
            )}
            <LocationBar
                locations={locations}
                handleSelectedLocation={handleSelectedLocation}
                removeLocation={removeLocation}
            />
            {selectedLocation && !weatherData && <Loading />}
            <Weather weatherData={weatherData} />
        </div>
    );
};

export default App;
