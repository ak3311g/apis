import { Link } from "react-router-dom";
import img from "../assets/logo.png";

export default function Header() {
    return (
        <>
        <div className="flex justify-between items-center border-b-2 border-black bg-gray-600 fixed top-0 w-full z-10">
	<p>
		Sorry for inconvenience but some APIs are not working because of protocols issue 
		they uses http but netlify only allow https sites are: 
		<ul>
			<li>Marvel</li>
			<li>Weather</li>
		</ul>
	</p>
            <div>
                <img src={img} alt="logo" className="hidden md:flex w-20 h-20 p-3" />
            </div>
            <div className="w-full">
                <ul className="flex justify-around items-center h-20 text-sm font-bold md:text-xl">
                    <li className="border-[2px] border-black bg-blue-500 px-6 rounded-md "><Link to="/" >Home</Link></li>
                    <li className="border-[2px] border-black bg-blue-500 px-6 rounded-md "><Link to="/about" >About</Link></li>
                    <li className="border-[2px] border-black bg-blue-500 px-6 rounded-md "><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}