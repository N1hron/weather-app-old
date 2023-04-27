import setWeatherImg from "./setWeatherImg";

import waterDrops from '../assets/water-drops.svg';

export default function renderElements(data) {
    const tempMax = data.reduce((result, current) => Math.max(result, current.tempC), 0);
    const elements = data.map((elem, i) => {
        const {tempC, code, timeOfDay, time, date, weather, wind, humidity} = elem;
        return (
            <li key={i}>
                <img src={setWeatherImg(code, timeOfDay)} alt={weather} draggable={false}/>
                <p>{tempC}℃</p>
                <div className="measure" draggable={false} style={{height: `${tempC / tempMax  * 100}px`}}></div>
                {/* <div className="divider"></div> */}
                <p>{wind} m/s</p>
                <div className="row">
                    <p>{humidity}%</p>
                    <img className="humidity-img" src={waterDrops} alt="water drops" draggable={false}/>
                </div>
                <p className="time">{time}</p>
                <p className="date">{date}</p>
            </li>
        )
    })

    return elements;
}