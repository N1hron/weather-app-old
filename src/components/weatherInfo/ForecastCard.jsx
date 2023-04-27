import { forwardRef } from 'react';

import renderForecast from '../../utils/renderForecast';

const ForecastCard = forwardRef(function ForecastCard({data, setDate, dates, date}, ref) {
    return (
        <div ref={ref} id="forecast" className="weather__card">
            <div className="row">
                <h2>24-hour forecast</h2>
                <select name="date" value={date - 1} onChange={event => {
                    event.preventDefault();
                    setDate(+event.target.value + 1);
                }}>
                    {dates.map((date, i) => <option key={i} value={i}>{date}</option>)}
                </select>
            </div>
            <ul>
                {renderForecast(data)}
            </ul>
        </div>
    )
})

export default ForecastCard;