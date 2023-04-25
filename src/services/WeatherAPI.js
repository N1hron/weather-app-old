import useHttp from "../hooks/http.hook";

const apiKey = 'ecbf19a2290c47d6a99213735232404';

export default function useWeatherAPI() {   
    const {request, setProcess, process} = useHttp();

    async function getWeather(location, days) {
        const response = await request(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`);
        const current = handleCurrentWeatherData(response),
              forecast = handleForecastData(response, days),
              dates = handleDates(response);
        return {current, forecast, dates};
    }
          
    function handleCurrentWeatherData(data) {
        return {
            name: data.location.name,
            country: data.location.country,
            localtime: data.location.localtime.split(' ')[1],
            tempC: Math.round(data.current.temp_c),
            tempF: Math.round(data.current.temp_f),
            feelsLikeC: Math.round(data.current.feelslike_c),
            feelsLikeF: Math.round(data.current.feelslike_f),
            weather: data.current.condition.text,
            code: data.current.condition.code,
            timeOfDay: data.current.condition.icon.includes('night') ? 'night' : 'day',
            wind: (data.current.wind_kph / 3.6).toFixed(1),
            humidity: data.current.humidity
        } 
    }

    function handleForecastData(data, day) {
        const hours = data.forecast.forecastday[day - 1].hour.filter((hour, i) => i % 3 === 0);
        return hours.map((hour) => {
            return {
                time: hour.time.split(' ')[1],
                date: hour.time.slice(5, 10),
                tempC: Math.round(hour.temp_c),
                tempF: Math.round(hour.temp_f),
                humidity: hour.humidity,
                wind: (hour.wind_kph / 3.6).toFixed(1),
                timeOfDay: hour.condition.icon.includes('night') ? 'night' : 'day',
                code: hour.condition.code,
            }     
        });
    }

    function handleDates(data) {
        return data.forecast.forecastday.map(day => day.date);
    }

    return {getWeather, process, setProcess};
}