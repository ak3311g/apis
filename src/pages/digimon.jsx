import getDigimon from "../api/digimon/getDigimon";
import { useEffect, useState } from "react";

export default function Digimon() {

    const [digimon, setDigimon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [disdata, setDisdata] = useState([]);

    useEffect(() => {
        getDigimon().then((data) => setDigimon(data));
        setLoading(false);
    }, []);

    const filterDigimon = (level) => {
        if (level === "All") {
            setDisdata(digimon);
        } else {
            const filter = digimon.filter((item) => item.level === level);
            setDisdata(filter);
        }
    }

    return (
        <div className="mt-80 sm:mt-64 md:mt-52 lg:mt-40">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:flex justify-center items-center place-items-center fixed top-20 w-full bg-gray-600">
                <button onClick={() => filterDigimon("All")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">All</button>
                <button onClick={() => filterDigimon("In Training")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">In Training</button>
                <button onClick={() => filterDigimon("Fresh")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">Fresh</button>
                <button onClick={() => filterDigimon("Rookie")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">Rookie</button>
                <button onClick={() => filterDigimon("Champion")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">Champion</button>
                <button onClick={() => filterDigimon("Ultimate")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">Ultimate</button>
                <button onClick={() => filterDigimon("Mega")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">Mega</button>
                <button onClick={() => filterDigimon("Armor")} className="bg-blue-500 text-black font-bold p-2 rounded-md m-2 border-[2px] w-[100px] border-black">Armor</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4 place-items-center">
                {loading ? (
                    <div className="text-4xl text-center">Loading...</div>
                ) : (
                    disdata.map((item, index) => (
                        <div key={index} className="border-[2px] rounded-md border-gray-950 m-3 p-3">
                            <img src={item.img} alt={item.name} className="w-40 h-40" />
                            <div className="text-center">{item.name}</div>
                            <div className="text-center">{item.level}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}