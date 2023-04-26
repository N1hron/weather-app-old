import CurrentCard from './CurrentCard';
import ForecastCard from './ForecastCard';
import WeekCard from './WeekCard';

import './weatherInfo.scss';

export default function WeatherInfo({data, date, setDate}) {
    return (
        <div className="weather">
            <CurrentCard data={data.current}/>
            <WeekCard data={data.week}/>
            <ForecastCard data={data.forecast} date={date} dates={data.dates} setDate={setDate}/>
        </div>
    )
}