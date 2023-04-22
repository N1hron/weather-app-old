import useHttp from "../hooks/http.hook";

export default function useWeatherAPI() {   
    const {request, setProcess, process} = useHttp();

    const apiKey = 'fb892f52993e357f7e4654a5a9bbc648';

    async function getData(coordinates) {
        const {lat, lon} = coordinates;
        const response = await request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response;
    }

    async function getGeographicalCoordinates(city) {
        const response = await request(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
        const {lat, lon} = response[0];
        return {lat, lon};
    }

    return {getData, getGeographicalCoordinates, process, setProcess};
}