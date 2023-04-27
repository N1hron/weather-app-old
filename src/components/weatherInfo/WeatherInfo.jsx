import CurrentCard from './CurrentCard';
import ForecastCard from './ForecastCard';
import WeekCard from './WeekCard';
import withAnimatedCard from '../../utils/withAnimatedCard';

import './weatherInfo.scss';

const AnimatedCurrentCard = withAnimatedCard(CurrentCard),
      AnimatedWeekCard = withAnimatedCard(WeekCard),
      AnimatedForecastCard = withAnimatedCard(ForecastCard);

export default function WeatherInfo({data, date, setDate}) {
    return (
        <div className="weather">
            <AnimatedCurrentCard data={data.current}/>
            <AnimatedWeekCard data={data.week}/>
            <AnimatedForecastCard data={data.forecast} date={date} dates={data.dates} setDate={setDate}/>
        </div>
    )
}