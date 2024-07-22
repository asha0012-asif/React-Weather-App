import { PropTypes } from "prop-types";

import "./Weather.css";

const Weather = ({ weatherData }) => {
    return weatherData ? (
        <div className="weather">
            <h2>Weather for {weatherData.name}</h2>
            <hr />
            <div className="content">
                <div className="main">
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                        alt={`${weatherData.description} icon`}
                        className="icon"
                    />
                    <div className="text">
                        <p className="temperature">
                            {weatherData.temperature}
                            <sup>°C</sup>
                        </p>
                        <p>Feels like {weatherData.feelsLike}°C</p>
                        <p>{weatherData.description}</p>
                    </div>
                </div>
                <div className="extra">
                    <div className="group">
                        <p className="main-text">
                            {weatherData.wind.speed}
                            <span className="sub-text"> km/h</span>
                        </p>
                        <span className="caption">wind</span>
                    </div>
                    <div className="group">
                        <p className="main-text">
                            {weatherData.wind.gust}
                            <span className="sub-text"> km/h</span>
                        </p>
                        <span className="caption">wind gust</span>
                    </div>
                    <div className="group">
                        <p className="main-text">
                            {weatherData.humidity}
                            <span className="sub-text"> %</span>
                        </p>
                        <span className="caption">humidity</span>
                    </div>
                    <div className="group">
                        <p className="main-text">
                            {weatherData.pressure}
                            <span className="sub-text"> kPA</span>
                        </p>
                        <span className="caption">pressure</span>
                    </div>
                    <div className="group">
                        <p className="main-text">
                            {weatherData.visibility}
                            <span className="sub-text"> km</span>
                        </p>
                        <span className="caption">visibility</span>
                    </div>
                    <div className="group">
                        <p className="main-text">{weatherData.ceiling}</p>
                        <span className="caption">ceiling</span>
                    </div>
                    <div className="group">
                        <p className="main-text">{weatherData.sunrise}</p>
                        <span className="caption">sunrise</span>
                    </div>
                    <div className="group">
                        <p className="main-text">{weatherData.sunset}</p>
                        <span className="caption">sunset</span>
                    </div>
                    <div className="group">
                        <p className="main-text">
                            {weatherData.maxTemperature}
                            <span className="sub-text">↑</span>
                            {weatherData.minTemperature}
                            <span className="sub-text">↓</span>
                        </p>
                        <span className="caption">high / low</span>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="weather">
            <p className="alert">No location selected.</p>
        </div>
    );
};

Weather.propTypes = {
    weatherData: PropTypes.object,
};

export default Weather;
