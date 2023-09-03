import {API_URL} from './apiconfig';

export default async function getCharacters(n) {
    const response = await fetch(`${API_URL.endpoint}/characters?ts=10000&apikey=${API_URL.publicuri}&hash=${API_URL.hash}&limit=12&offset=${n}`);
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
}

//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150