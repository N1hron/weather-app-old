import setWeatherImg from "./setWeatherImg";

import waterDrops from '../assets/water-drops.svg';

export default function renderForecast(data, isSmallScreen) {
    const tempMax = data.reduce((result, current) => Math.max(result, current.tempC), 0),
          tempMin = data.reduce((result, current) => Math.min(result, current.tempC), 9999);
    const elements = data.map((elem, i) => {
        const {tempC, code, timeOfDay, time, date, weather, wind, humidity} = elem;
        
        const measureLength = (tempC + (tempMin < 0 ? Math.abs(tempMin) + 1 : 0)) / (tempMax + (tempMin < 0 ? Math.abs(tempMin) + 1 : 0)) * 100;

        return (
            <li key={i}>
                <div className="column">
                    <img className="weather-icon" src={setWeatherImg(code, timeOfDay)} alt={weather} draggable={false}/>
                    <p>{tempC}℃</p>
                </div>
                <div 
                    className="measure" 
                    draggable={false} 
                    style={isSmallScreen ? 
                    {width: `${measureLength + 30}px`, height: '3px', borderRadius: '0 3px 3px 0'} : 
                    {height: `${measureLength}px`, width: '3px', borderRadius: '3px 3px 0 0'}}>
                </div>
                <div className="column">
                    <p>{wind} m/s</p>
                    <div className="row">
                        <p>{humidity}%</p>
                        <img className="humidity-img" src={waterDrops} alt="water drops" draggable={false}/>
                    </div>
                    <p className="time">{time}</p>
                    <p className="date">{date}</p>
                </div>
            </li>
        )
    })

    return elements;
}