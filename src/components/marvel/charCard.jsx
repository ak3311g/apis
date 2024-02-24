import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./charCard.css";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DetailCard from "./detailCard";

export default function CharCard({ char, details, setStatus }) {
    const [detStatus, setDetStatus] = useState(false);

    const changeStatus = () => (
        setDetStatus(!detStatus)
    )

    console.log(char);

    return (
        <div className="bg-[#386dd4] rounded-lg shadow-lg p-4 flex items-center m-3 flex-col">
            <div className="card flex flex-col justify-center items-center">
                <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} className="img w-40 h-40" />
                <p className="hidden-text font-bold text-center" onClick={() => changeStatus()}>Click</p>
            </div>
                <p className="text-2xl font-bold text-center mt-5">{char.name}</p>
            {
                detStatus == false ? (
                    null
                ) : (
                    <div className="w-screen h-screen z-50 bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center">
                        <DetailCard char={char} changeStatus={changeStatus} />
                    </div>
                )
            }
        </div>
    )
}

