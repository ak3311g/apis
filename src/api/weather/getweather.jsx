import { API_URI } from "./apiconfig";

export default async function getWeather(city){
    const response = await fetch(`${API_URI.endpoint}key=${API_URI.key}&q=${city}`);
    const data = await response.json();
    return data;
}

