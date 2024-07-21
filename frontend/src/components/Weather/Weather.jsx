import "./Weather.css";

const Weather = ({ weatherData }) => {
    return weatherData ? (
        <div className="weather">
            <h2>Weather for {weatherData.name}</h2>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Feels like: {weatherData.main.feels_like}°C</p>
            <p>Wind Speed: {weatherData.wind.speed}km/h</p>
            <p>{weatherData.weather[0].icon}</p>
            {/* <img src={} alt="" /> */}
        </div>
    ) : (
        <div className="weather">
            <p className="alert">No location selected.</p>
        </div>
    );
};

export default Weather;
