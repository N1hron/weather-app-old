import setWeatherImg from "../../utils/setWeatherImg";

export default function CurrentCard({data}) {
    const {location, country, hours, minutes, timezone, weather, description, temperature, feels_like, wind, humidity} = data;
    return (
        <div id="current" className="weather__card">
            <div className="row">
                <h2>{location}</h2>
                <p id="country">{country}</p>
            </div>
            <div className="row">
                <p>Today</p>
                <p>{hours + ':' + minutes + ' ' + timezone}</p>
            </div>
            <div className="row">
                <p>{weather}</p>
                <p>{description}</p>
            </div>
            <div className="row">
                <p>{temperature + '℃'}</p>
                <p>feels like {feels_like + '℃'}</p>
            </div>
            <img src={setWeatherImg(description)} alt={`${weather}`} draggable={false}/>
            <p>Wind: {wind} m/s</p>
            <p>Humidity: {humidity}%</p>
        </div>
    )
}