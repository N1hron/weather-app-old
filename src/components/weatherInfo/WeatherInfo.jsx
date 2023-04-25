import CurrentCard from './CurrentCard';
import ForecastCard from './ForecastCard';

import './weatherInfo.scss';

export default function WeatherInfo({data, setDate}) {
    return (
        <div className="weather">
            <CurrentCard data={data.current}/>
            <ForecastCard data={data.forecast} dates={data.dates} setDate={setDate}/>
        </div>
    )
}