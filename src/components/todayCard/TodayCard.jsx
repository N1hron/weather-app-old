export default function TodayCard({data}) {
    const renderData = {
        city: data.name,
        timezone: `UTC ${data.timezone / 60 / 60}`,
        hours: Math.floor(data.dt / 60 / 60 % 24) + Math.floor(data.timezone / 60 / 60),
        minutes: Math.floor((data.dt / 60 % 60)),
        temperature: Math.round(-273.15 + data.main.temp),
        feels_like: Math.round(-273.15 + data.main.feels_like),
        weather: data.weather[0].main
    }
    
    return (
        <div className="today-card">
            <h2>{renderData.city}</h2>
            <p>Today: {renderData.hours + ':' + renderData.minutes + ' ' + renderData.timezone}</p>
            <p>{renderData.weather}</p>
            <p>{renderData.temperature + '℃'}</p>
            <p>Feels like {renderData.feels_like + '℃'}</p>
            <p></p>
        </div>
    )
}