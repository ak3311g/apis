import {API_URL} from './apiconfig';

export async function getCharacters(n) {
    const response = await fetch(`${API_URL.endpoint}/characters?ts=10000&apikey=${API_URL.publicuri}&hash=${API_URL.hash}&limit=100&offset=${n}`);
    const data = await response.json();
    return data.data.results;
}

export default async function finaldata(){
    var finaldata = [];
    let n=0;
    while(finaldata.length<20){
        const data = await getCharacters(n++);
        data.forEach(element => {
            if(element.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"&&element.description!=""){
                finaldata.push(element);
            }
        });
    }
    return finaldata;
}