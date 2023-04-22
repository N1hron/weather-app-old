import weatherImg from '../weatherImg/WeatherImg';

import './weatherInfo.scss';


export default function WeatherInfo({data, city}) {
    const handleTimezone = (tz) => tz > 0 ? `+${tz}` : tz,
          handleHours = (sec, timezone) => {
            const hours = Math.floor(sec / 60 / 60 % 24) + Math.floor(timezone / 60 / 60);
            return hours === 24 ? 0 : hours;
          },
          insertZero = (unit) => `${unit}`.length < 2 ? `0${unit}` : unit;

    function handleData() {
        return !data || data.length === 0 ? null :
        {
            name: data.name,
            timezone: `UTC${handleTimezone(data.timezone / 60 / 60)}`,
            hours: insertZero(handleHours(data.dt, data.timezone)),
            minutes: insertZero(Math.floor((data.dt / 60 % 60))),
            temperature: Math.round(-273.15 + data.main.temp),
            feels_like: Math.round(-273.15 + data.main.feels_like),
            weather: data.weather[0].main,
            description: data.weather[0].description
        } 
    }

    const renderData = handleData();
    return (
        <div className="weather">
            <div id="today" className="weather__card">
                <h2>{city}</h2>
                <p className="time">Today: {renderData?.hours + ':' + renderData?.minutes + ' ' + renderData?.timezone}</p>
                <p className="weather-type">{`${renderData?.weather}: ${renderData?.description}`}</p>
                <img src={weatherImg(renderData?.description)} alt={`${renderData?.weather}`} draggable={false}/>
                <div className="temperature">
                    <p>{renderData?.temperature + '℃'}</p>
                    <p>Feels like {renderData?.feels_like + '℃'}</p>
                </div>
            </div>
            <div className="weather__card"></div>
            <div className="weather__card weather__card_wide"></div>
        </div>
    )
}