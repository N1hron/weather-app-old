import useHttp from "../hooks/http.hook";

export default function useWeatherAPI() {   
    const {request, setProcess, process} = useHttp();

    const apiKey = 'fb892f52993e357f7e4654a5a9bbc648';

    async function getData({lat, lon}) {
        const response = await request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response;
    }

    async function getGeographicalCoordinates(city) {
        const response = await request(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
        const {name, lat, lon} = response[0];
        return {name, lat, lon};
    }

    return {getData, getGeographicalCoordinates, process, setProcess};
}