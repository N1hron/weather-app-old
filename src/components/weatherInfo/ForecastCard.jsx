import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Error from '../error/Error';

import renderForecast from '../../utils/renderForecast';

const ForecastCard = forwardRef(function ForecastCard({data, setDate, dates, date}, ref) {
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 888px)'
    })

    return (
        <div ref={ref} id="forecast" className="weather__card">
            {!data || !Object.keys(data).length ? <Error/> : 
            <>
                <div className="forecast-header">
                    <h2>24-hour forecast</h2>
                    <select name="date" value={date - 1} onChange={event => {
                        event.preventDefault();
                        setDate(+event.target.value + 1);
                    }}>
                        {dates.map((date, i) => <option key={i} value={i}>{date}</option>)}
                    </select>
                </div>
                <ul>
                    {renderForecast(data, isSmallScreen)}
                </ul>
            </>}
        </div>
    )
})

export default ForecastCard;