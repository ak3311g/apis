import Wibu from "./wibu";
import { Link } from "react-router-dom";

export default function Hub() {
    return (
        <div>
            <div className="">
                <Link to="/wibu" element={<Wibu />} >WIBU</Link>
            </div>
        </div>
    )
}