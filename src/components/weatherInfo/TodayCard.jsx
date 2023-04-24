import setWeatherImg from "../../utils/setWeatherImg"

export default function TodayCard({data}) {
    const tempMax = data.reduce((result, current) => Math.max(result, current.temperature), 0);
    const elements = data.map((elem, i) => {
        return (
            <li key={i}>
                <img src={setWeatherImg(elem.weather)} alt={elem.weather} draggable={false}/>
                <p>{elem.temperature}℃</p>
                <div className="measure" draggable={false} style={{height: `${elem.temperature / tempMax  * 125}px`}}></div>
                <p className="time">{`${elem.hours}:${elem.minutes}`}</p>
                <p className="date">{elem.date}</p>
            </li>
        )
    })

    return (
        <div id="today" className="weather__card">
            <h2>24 hours forecast</h2>
            <ul>
                {elements}
            </ul>
        </div>
    )
}