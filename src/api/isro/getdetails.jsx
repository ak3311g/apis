import { API_URI } from "./apiconfig";

const getlaunches = async () => {
    const response = await fetch(API_URI.endpoint + "launches");
    const data = await response.json();
    return data;
}

const getsapcecrafts = async () => {
    const response = await fetch(API_URI.endpoint + "spacecraft");
    const data = await response.json();
    return data;
}

export { getlaunches, getsapcecrafts};