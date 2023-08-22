import { API_URL } from "./apiconfig";

export default async function getDigimon() {
    try {
        const response = await fetch(API_URL.endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}