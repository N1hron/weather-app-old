import { memo, forwardRef } from "react";
import Error from "../error/Error";

import setWeatherImg from "../../utils/setWeatherImg";

const CurrentCard = forwardRef(function CurrentCard({data}, ref) {
    return (
        <div ref={ref} id="current" className="weather__card">
            {!data || !Object.keys(data).length ? <Error/> :
            <>
                <div className="row">
                <h2>{data.name}</h2>
                </div>
                <div className="row">
                    <p>Now</p>
                    <p>{data.localtime}</p>
                </div>
                <p>{data.weather}</p>
                <div className="row">
                    <p>{data.tempC + '℃'}</p>
                    <p>feels like {data.feelsLikeC + '℃'}</p>
                </div>
                <img src={setWeatherImg(data.code, data.timeofDay)} alt={`${data.weather}`} draggable={false}/>
                <p>Wind: {data.wind} m/s</p>
                <p>Humidity: {data.humidity}%</p>
            </>}
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