import finaldata from '../api/marvel/getMarvel';
import { useState,useEffect } from 'react';

export default function Marvel() {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        finaldata().then((data) => {
            setChars(data);
            setLoading(false);
            console.log("fetched");
        });
    }, []);

    if(loading){
        console.log("loading...");
        return(
            <div className="pt-20">
                <h1 className="text-4xl text-center">Marvel</h1>
                <div className="grid grid-cols-4 gap-5">
                <h1 className="text-4xl text-center">Loading...</h1>
                </div>
            </div>
        )
    }
    else{
    return (
        <>
        <div className="pt-20">
            <h1 className="text-4xl text-center">Marvel</h1>
            <div className="grid grid-cols-4 gap-5">
                {   
                    chars.map((char) => {
                        return(
                        <div key={char.id?char.id:`${char.id}+1`} className="bg-blue-300 rounded-lg shadow-lg p-4 flex justify-center items-center flex-col">
                            <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="" className="rounded-lg" width={"150px"}/>
                            <h1 className="text-3xl font-extrabold">{char.name}</h1>
                            <p className="text-md">{char.description}</p>
                        </div>)
                    })
                }
            </div>
        </div>
        </>
    )}
}