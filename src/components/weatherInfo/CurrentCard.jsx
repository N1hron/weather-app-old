import { memo, forwardRef } from "react";

import setWeatherImg from "../../utils/setWeatherImg";

const CurrentCard = forwardRef(function CurrentCard({data}, ref) {
    const {name, country, localtime, weather, code, timeofDay, tempC, feelsLikeC, wind, humidity} = data;
    return (
        <div ref={ref} id="current" className="weather__card">
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
})

function propsCompare(prev, next) {
    for (let i in prev.current) {
        if(prev.current[i] !== next.current[i]) {
            return false;
        }
    }
    return true;
}

export default memo(CurrentCard, propsCompare);