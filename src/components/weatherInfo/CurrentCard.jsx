import { memo } from "react";

import setWeatherImg from "../../utils/setWeatherImg";

const MemoCurrentCard = memo(function CurrentCard({data}) {
    const {name, country, localtime, weather, code, timeofDay, tempC, feelsLikeC, wind, humidity} = data;
    return (
        <div id="current" className="weather__card">
            <div className="row">
                <h2>{name}</h2>
                {/* <p id="country">{country}</p> */}
            </div>
            <div className="row">
                <p>Now</p>
                <p>{localtime}</p>
            </div>
            <p>{weather}</p>
            <div className="row">
                <p>{tempC + '℃'}</p>
                <p>feels like {feelsLikeC + '℃'}</p>
            </div>
            <img src={setWeatherImg(code, timeofDay)} alt={`${weather}`} draggable={false}/>
            <p>Wind: {wind} m/s</p>
            <p>Humidity: {humidity}%</p>
        </div>
    )
}, propsCompare)

function propsCompare(prev, next) {
    for (let i in prev) {
        if(prev[i] !== next[i]) {
            return false;
        }
    }
    return true;
}

export default MemoCurrentCard;