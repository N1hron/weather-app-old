import useHttp from "../hooks/http.hook";

export default function useWeatherAPI() {   
    const {request, setProcess, process} = useHttp();

    const apiKey = 'fb892f52993e357f7e4654a5a9bbc648';

    async function getGeographicalCoordinates(city) {
        const response = await request(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
        const {name, lat, lon} = response[0];
        return {name, lat, lon};
    }

    async function getCurrentWeather(lat, lon) {
        const response = await request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return handleCurrentWeatherData(response);
    }

    async function getfiveDaysWeather(lat, lon) {
        const response = await request(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response;
    }

    async function getWeather({lat, lon}) {
        const current = await getCurrentWeather(lat, lon);
        const fiveDays = await getfiveDaysWeather(lat, lon);
        const today = handleTodayWeatherData(fiveDays);
        return {current, fiveDays, today};
    }

    const handleTimezone = (tz) => tz > 0 ? `+${tz}` : tz,
          insertZero = (unit) => `${unit}`.length < 2 ? `0${unit}` : unit;

    function handleHours(sec, timezone) {
            const hours = Math.floor((sec + timezone) / 60 / 60 % 24);
            return hours === 24 ? 0 : hours;
    }
          
    function handleCurrentWeatherData(data) {
        return {
            location: data.location,
            country: data.sys.country,
            timezone: `UTC${handleTimezone(data.timezone / 60 / 60)}`,
            hours: insertZero(handleHours(data.dt, data.timezone)),
            minutes: insertZero(Math.floor((data.dt / 60 % 60))),
            temperature: Math.round(-273.15 + data.main.temp),
            feels_like: Math.round(-273.15 + data.main.feels_like),
            weather: data.weather[0].main,
            description: data.weather[0].description,
            wind: data.wind.speed,
            humidity: data.main.humidity
        } 
    }

    function handleTodayWeatherData(data) {
        return data.list.slice(0, 9).map(elem => {
            return {
                date: elem.dt_txt.slice(5, 10),
                hours: insertZero(handleHours(elem.dt, data.city.timezone)),
                minutes: insertZero(Math.floor((elem.dt / 60 % 60))),
                temperature: Math.round(-273.15 + elem.main.temp),
                weather: elem.weather[0].description
            }
        })
    }

    return {getGeographicalCoordinates, getWeather, process, setProcess};
}