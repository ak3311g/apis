import { Link } from "react-router-dom";
import img from "../assets/logo.png";

export default function Header() {
    return (
        <>
        <div className="flex justify-between items-center bg-[#386DD4] fixed top-0 w-full z-10">
            <div>
                <img src={img} alt="logo" className="hidden md:flex w-20 h-20 p-3" />
            </div>
            <div className="w-full">
                <ul className="flex justify-around items-center h-20 text-sm font-bold md:text-xl">
                    <li className="text-white font-bold text-lg sm:text-3xl uppercase"><Link to="/" >Home</Link></li>
                    <li className="text-white font-bold text-lg sm:text-3xl uppercase"><Link to="/about" >About</Link></li>
                    <li className="text-white font-bold text-lg sm:text-3xl uppercase"><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}