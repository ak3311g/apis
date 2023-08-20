import getAnime from '../api/wibu/getAnime';
import { useState,useEffect } from 'react';

export default function Wibu() {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAnime().then((data) => {
            setChars(data);
            setLoading(false);
            console.log(data);
        });
    }, []);

    if(loading){
        return (<h1 className="text-4xl text-center">Loading...</h1>)
    }
    else{
    return (
        <>
        <div className="pt-20">
            <h1 className="text-4xl text-center">Marvel</h1>
            <div className="grid grid-cols-3 gap-4">
                {   
                    chars.map((char) => {
                        return(
                        <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                            <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="" className="rounded-lg"/>
                            <h1 className="text-xl font-bold">{char.name}</h1>
                            <p className="text-sm">{char.description}</p>
                        </div>)
                    })
                }
            </div>
        </div>
        </>
    )}
}