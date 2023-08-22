import Digimon from "./digimon";
import Marvel from "./marvel";
import { Link } from "react-router-dom";

export default function Hub() {
    return (
        <div>
            <div className="grid grid-cols-5 gap-5 mt-4">
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/digimon" element={<Digimon />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">DIGIMON</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
                <Link to="/marvel" element={<Marvel />} className="text-4xl border-[2px] rounded-md font-semibold border-gray-950 m-3 p-3 text-center bg-blue-500">MARVEL</Link>
            </div>
        </div>
    )
}