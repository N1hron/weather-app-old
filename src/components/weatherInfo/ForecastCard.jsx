import setWeatherImg from "../../utils/setWeatherImg"

export default function ForecastCard({data, dates, setDate}) {
    const tempMax = data.reduce((result, current) => Math.max(result, current.tempC), 0);
    const elements = data.map((elem, i) => {
        const {tempC, code, timeOfDay, time, date} = elem;
        return (
            <li key={i}>
                <img src={setWeatherImg(code, timeOfDay)} alt="weather" draggable={false}/>
                <p>{tempC}℃</p>
                <div className="measure" draggable={false} style={{height: `${tempC / tempMax  * 125}px`}}></div>
                <p className="time">{time}</p>
                <p className="date">{date}</p>
            </li>
        )
    })

    return (
        <div id="forecast" className="weather__card">
            <div className="row">
                <h2>24 hours forecast</h2>
                <select name="date" onChange={event => {
                    event.preventDefault();
                    setDate(+event.target.value + 1);
                }}>
                    {dates.map((date, i) => <option key={i} value={i}>{date}</option>)}
                </select>
            </div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}