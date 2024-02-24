import Digimon from "./digimon";
import Marvel from "./marvel";
import { Link } from "react-router-dom";
import Weather from "./weather";
import Isro from "./isro";
import FreeGames from "./freegames";
import HubTab from "../components/hubtab";

export default function Hub() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 w-full p-5">
                <HubTab title="MARVEL" link="/marvel" element={<Marvel />} image="/marvel.png" />
                <HubTab title="Digimon" link="/digimon" element={<Digimon />} image="/digimon.png" />
                <HubTab title="Free Games" link="/freegames" element={<FreeGames />} image="/freegames.png" />
                <HubTab title="ISRO" link="/isro" element={<Isro />} image="/isro.png" />
                <HubTab title="Weather" link="/weather" element={<Weather />} image="/weather.png" />
            </div>
        </div>
    )
}