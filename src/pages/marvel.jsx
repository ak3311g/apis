import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import getCharacters from '../api/marvel/getMarvel';
import { useState, useEffect } from 'react';
import CharCard from '../components/marvel/charCard';

export default function Marvel() {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [n, setN] = useState(0);

    const next = () => {
        setN(n + 12);
    }

    const prev = () => {
        if(n - 12 >= 0)
        setN(n - 12);
    }

    useEffect(() => {
        setLoading(true);
        getCharacters(n).then((data) => {
            setChars(data);
            setLoading(false);
        });
    }, [n]);

    if (loading) {
        console.log("loading...");
        return (
            <div className='fixed top-20 w-full bg-white z-10 flex flex-col justify-center items-center'>
                <p className="text-5xl w-fit px-1 my-4 tracking-tighter font-bold uppercase text-white bg-red-500 text-center">Marvel</p>
                <section className="w-full flex justify-center items-center my-4">
                    <button className="bg-red-500 text-white font-bold" onClick={() => prev()}>
                        <FontAwesomeIcon icon={faArrowLeft} size='xl' border />
                    </button>
                    <span className="text-4xl text-center text-black mx-4">{n / 12}</span>
                    <button className="bg-red-500 text-white font-bold" onClick={() => next()}>
                        <FontAwesomeIcon icon={faArrowRight} size='xl' border />
                    </button>
                </section>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="pt-20 flex flex-col justify-center items-center">
                    <div className='fixed top-20 w-full bg-white z-10 flex flex-col justify-center items-center'>
                        <p className="text-5xl w-fit px-1 my-4 tracking-tighter font-bold uppercase text-white bg-red-500 text-center">Marvel</p>
                        <section className="w-full flex justify-center items-center my-4">
                            <button className="bg-red-500 text-white font-bold" onClick={() => prev()}>
                                <FontAwesomeIcon icon={faArrowLeft} size='xl' border />
                            </button>
                            <span className="text-4xl text-center text-black mx-4">{n / 12}</span>
                            <button className="bg-red-500 text-white font-bold" onClick={() => next()}>
                                <FontAwesomeIcon icon={faArrowRight} size='xl' border />
                            </button>
                        </section>
                    </div>
                    <div className="grid grid-cols-1 mt-36 w-full bg-white pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {
                            chars.map((char) => (
                                (
                                    <CharCard char={char} key={char.id ? char.id : `${char.id}+1`} />
                                )
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}