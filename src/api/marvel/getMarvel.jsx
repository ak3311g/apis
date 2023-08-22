import {API_URL} from './apiconfig';

var alldata = [];

export async function getCharacters(n) {
    const response = await fetch(`${API_URL.endpoint}/characters?ts=10000&apikey=${API_URL.publicuri}&hash=${API_URL.hash}&limit=20&offset=${n}`);
    const data = await response.json();
    alldata.push(...data.data.results);
    return data.data.results;
}

console.log(alldata);

export default async function finaldata(){
    const uniquedata = new Set();
    var final = [];
    var n = 0;
    while(final.length<12){
        const data = await getCharacters(n++);
        console.log("loading...");
        data.forEach(element => {
            if(element.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"&&element.description!=""){
                if(!uniquedata.has(element.id)){
                    uniquedata.add(element.id);
                    final.push(element);
                }
            }
        });
        console.log("loaded");
    }
    console.log(final);
    return final;
}

//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150