import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailCard({ char, changeStatus }) {
    return (
        <>
            <div className="details">
                <div className="bg-red-500 m-6">
                    <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} className="img w-40 h-40" />
                </div>
                <div className="bg-red-500">
                    <FontAwesomeIcon icon={faTimes} size="2x" border onClick={() => changeStatus()} />
                </div>
                <p className="text-center font-semibold text-2xl mx-3 md:w-1/2 my-10">{char.description}</p>
                <div className="grid grid-cols-2 md:flex justify-center items-center gap-5">
                    <p className="text-center text-xl font-semibold border-2 border-red-500 p-5 rounded-lg bg-red-500 text-white uppercase">Comics: {char.comics?.available}</p>
                    <p className="text-center text-xl font-semibold border-2 border-red-500 p-5 rounded-lg bg-red-500 text-white uppercase">Series: {char.series?.available}</p>
                    <p className="text-center text-xl font-semibold border-2 border-red-500 p-5 rounded-lg bg-red-500 text-white uppercase">Stories: {char.stories?.available}</p>
                    <p className="text-center text-xl font-semibold border-2 border-red-500 p-5 rounded-lg bg-red-500 text-white uppercase">Events: {char.events?.available}</p>
                </div>
            </div>
        </>
    )
}