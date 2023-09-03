import { getlaunches, getsapcecrafts } from "../api/isro/getdetails";
import { useEffect, useState } from "react";


export default function Isro() {

    const [launches, setlaunches] = useState([]);
    const [spacecrafts, setspacecrafts] = useState([]);
    const [state, setstate] = useState("launches");

    useEffect(() => {
        const fetchlaunches = async () => {
            const launches = await getlaunches();
            console.log(launches);
            setlaunches(launches);
        }
        const fetchspacecrafts = async () => {
            const spacecrafts = await getsapcecrafts();
            console.log(spacecrafts);
            setspacecrafts(spacecrafts);
        }
        fetchlaunches();
        fetchspacecrafts();
    }, [])

    function setlaunchstate() {
        if (state === "spacecrafts") {
            setstate("launches")
        }
        else {
            setstate("launches")
        }
    }

    function setspacecraftstate() {
        if (state === "launches") {
            setstate("spacecrafts")
        }
        else {
            setstate("spacecrafts")
        }
    }


    if (launches.length === 0 || spacecrafts.length === 0) {
        return (
            <>
                <div className="bg-slate-600 w-full h-40 mt-20 fixed">
                    <p className="text-5xl text-white font-semibold text-center p-3">ISRO</p>
                    <div className="flex justify-center items-center">
                        <button className="bg-blue-500 text-white font-semibold rounded-md p-2 m-2" onClick={() => setlaunchstate()}>Launches</button>
                        <button className="bg-blue-500 text-white font-semibold rounded-md p-2 m-2" onClick={() => setspacecraftstate()}>Spacecrafts</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center relative top-60 z-0">
                    <p className="text-5xl font-semibold">{state.toUpperCase()}</p>
                    <p className="text-5xl font-semibold">Loading...</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="bg-slate-600 w-full h-40 mt-20 fixed z-10">
                <p className="text-5xl text-white font-semibold text-center p-3">ISRO</p>
                <div className="flex justify-center items-center">
                    <button className="bg-blue-500 text-white font-semibold rounded-md p-2 m-2" onClick={() => setlaunchstate()}>Launches</button>
                    <button className="bg-blue-500 text-white font-semibold rounded-md p-2 m-2" onClick={() => setspacecraftstate()}>Spacecrafts</button>
                </div>
            </div>
            <div className="relative top-60 z-0">
                <p className="text-5xl font-semibold text-center p-3">{state.toUpperCase()}</p>
                {
                    state === "launches" ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3">
                            {
                                launches.map((launch) => {
                                    return (
                                        <div key={launch.UUID} className="w-full my-5 border-[2px] border-black flex flex-col justify-center items-center text-center p-3 rounded-xl hover:shadow-xl">
                                            <p className="text-xl font-bold my-5">{launch.Name}</p>
                                            <p className="text-lg font-semibold my-2">Date: {launch.LaunchDate}</p>
                                            <p className="text-lg font-semibold my-2">Type: {launch.LaunchType}</p>
                                            <p className="text-lg font-semibold">Payload: {launch.Payload}</p>
                                            <a href={launch.Link} className="text-lg text-black font-bold bg-green-600 rounded-md px-3">Link</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                spacecrafts.map((spacecraft) => {
                                    return (
                                        <div key={spacecraft._id} className="w-full my-5 border-[2px] border-black flex flex-col justify-center items-center text-center p-3 rounded-xl hover:shadow-xl">
                                            <p className="text-xl font-bold my-5">{spacecraft.missionStatus}</p>
                                            <p className="text-xl font-bold my-5">{spacecraft.name}</p>
                                            <p className="text-lg font-semibold my-2">Date: {spacecraft.launchDate}</p>
                                            <p className="text-lg font-semibold my-2">Vehicle: {spacecraft.launchVehicle}</p>
                                            <p className="text-lg font-semibold">Application: {spacecraft.application}</p>
                                            <a href={spacecraft.Link} className="text-lg text-black font-bold bg-green-600 rounded-md px-3">Link</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </>
    )
}