import CurrentCard from './CurrentCard';
import TodayCard from './TodayCard';

import './weatherInfo.scss';

export default function WeatherInfo({current, today}) {
    return (
        <div className="weather">
            <CurrentCard data={current}/>
            <TodayCard data={today}/>
            {/* <div className="weather__card weather__card_wide"></div> */}
        </div>
    )
}