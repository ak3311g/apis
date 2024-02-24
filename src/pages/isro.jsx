import { getlaunches, getsapcecrafts } from "../api/isro/getdetails";
import { useEffect, useState } from "react";
import Stars from "../components/isro/stars";


export default function Isro() {

    const [launches, setlaunches] = useState([]);
    const [spacecrafts, setspacecrafts] = useState([]);
    const [state, setstate] = useState("launches");

    useEffect(() => {
        const fetchlaunches = async () => {
            const launches = await getlaunches();
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
            <div className="fixed w-screen h-screen bg-gradient-to-br from-[#030508] to-[#10273d] -z-20"></div>
            <div className="bg-slate-600 w-full h-40 mt-20 fixed z-10">
                <p className="text-5xl text-white font-semibold text-center p-3">ISRO</p>
                <div className="flex justify-center items-center">
                    <button className="bg-blue-500 text-white font-semibold rounded-md p-2 m-2" onClick={() => setlaunchstate()}>Launches</button>
                    <button className="bg-blue-500 text-white font-semibold rounded-md p-2 m-2" onClick={() => setspacecraftstate()}>Spacecrafts</button>
                </div>
            </div>
            <div className="relative top-60 z-0">
                <p className="text-5xl font-semibold text-center p-3 text-white">{state.toUpperCase()}</p>
                {
                    state === "launches" ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-3">
                            {
                                launches.map((launch) => {
                                    return (
                                        <div key={launch.UUID} className="flex flex-col justify-center items-center bg-[url('./starbg.jpg')] bg-no-repeat bg-center bg-cover rounded-md shadow-sm shadow-white">
                                            <p className="text-2xl bg-black font-bold py-3 w-full text-white text-center">{launch.Name}</p>
                                            <div className="flex justify-around w-full text-white">
                                                <p className="text-xl font-semibold my-2">Date: {launch.LaunchDate}</p>
                                                <p className="text-xl font-semibold my-2">Type: {launch.LaunchType}</p>
                                            </div>
                                            <p className="text-xl font-semibold text-white my-5">Payload: {launch.Payload}</p>
                                            <a href={launch.Link} className="text-xl w-full text-center text-white font-bold bg-green-600 hover:bg-blue-600 rounded-md px-3" target="_blank">Link</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3">
                            {
                                spacecrafts.map((spacecraft) => {
                                    return (
                                        <div key={spacecraft._id} className="flex flex-col text-white gap-4 justify-center items-center bg-[url('./starbg.jpg')] bg-no-repeat bg-center bg-cover rounded-md shadow-sm shadow-white">
                                            <p className="text-2xl bg-black font-bold py-3 w-full text-white text-center">{spacecraft.name}</p>
                                            <p className="text-xl font-semibold my-2">Date: {spacecraft.launchDate}</p>
                                            <p className="text-xl font-semibold my-2">Vehicle: {spacecraft.launchVehicle}</p>
                                            <p className="text-xl font-semibold">Application: {spacecraft.application}</p>
                                            <span className="text-xl font-semibold bg-white w-full text-center">{spacecraft.missionStatus=="MISSION SUCCESSFUL"?(
                                                <p className="text-green-600">Mission Status: {spacecraft.missionStatus}</p>
                                            ):(
                                                <p className="text-red-600">Mission Status: {spacecraft.missionStatus}</p>
                                            )}</span>
                                            <a href={spacecraft.link} className="text-xl w-full text-center text-white font-bold bg-green-600 hover:bg-blue-600 rounded-md px-3" target="_blank">Link</a>
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