import renderForecast from '../../utils/renderForecast';

export default function ForecastCard({data, setDate, dates, date}) {
    return (
        <div id="forecast" className="weather__card">
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
}