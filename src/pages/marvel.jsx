import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import getCharacters from '../api/marvel/getMarvel';
import { useState,useEffect } from 'react';

export default function Marvel() {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [n, setN] = useState(0);

    const next = () => {
        setN(n+12);
    }

    const prev = () => {
        setN(n-12);
    }

    useEffect(() => {
        setLoading(true);
        getCharacters(n).then((data) => {
            setChars(data);
            setLoading(false);
        });
    }, [n]);

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
            <section className="text-gray-600 body-font flex justify-center items-center my-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>prev()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <span className="text-4xl text-center mx-4">{n/12}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>next()}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </section>
            <h1 className="text-4xl text-center">Marvel</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {   
                    chars.map((char) => {
                        return(
                        <div key={char.id?char.id:`${char.id}+1`} className="bg-blue-300 rounded-lg shadow-lg p-4 flex items-center flex-col h-full">
                            <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="" className="rounded-lg relative top-0" width={"150px"}/>
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