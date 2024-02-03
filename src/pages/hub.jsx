import Digimon from "./digimon";
import Marvel from "./marvel";
import { Link } from "react-router-dom";
import Weather from "./weather";
import Isro from "./isro";
import FreeGames from "./freegames";

export default function Hub() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/digimon" element={<Digimon />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">DIGIMON</Link>
                <Link to="/weather" element={<Weather />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">WEATHER</Link>
                <Link to="/isro" element={<Isro />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">ISRO</Link>
                <Link to="/freegames" element={<FreeGames />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">FREE GAMES</Link>
                {/* <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className=" border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500 md:text-xl sm:text-md lg:text-4xl">MARVEL</Link> */}
            </div>
        </div>
    )
}