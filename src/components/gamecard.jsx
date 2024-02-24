import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GameCard({ game }) {

    function showcard(){
        const desc = document.getElementById(game.id+"more-det");
        desc.classList.toggle("hidden");
    }

    return (
        <>
            <div className="w-full">
                <div className="bg-[#464BB9] w-full h-44 my-4 rounded-xl flex flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-around h0full m-3">
                            <div>
                                <p className="text-white text-lg font-bold">{game.title}</p>
                                <p className="text-white text-sm">{game.developer}</p>
                            </div>
                            <div>
                                <p className="text-white text-sm">{game.genre}</p>
                            </div>
                            <div>
                                <button className="bg-[#3d9e16] w-24 h-6 rounded-xl">
                                  <a href={game.game_url} target="_blank">  <p className="text-white text-sm">Play Now</p></a>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-around h0full m-3">
                            <div>
                                <img src={game.thumbnail} alt="" className="w-24 h-24 rounded-xl" />
                            </div>
                            <div className="flex flex-row">
                                <p className="text-white text-sm">{game.platform}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="bg-[#152266] w-full h-6 rounded-xl" onClick={()=>showcard()}>
                            <FontAwesomeIcon icon={faArrowDown} className="text-black text-lg" />
                        </button>
                    </div>
                </div>
                <div className="bg-blue-700 w-full h-44 my-4 py-2 rounded-xl justify-between hidden" id={game.id+"more-det"}>
                    <div className="flex flex-col justify-around h-full text-center">
                    <div>
                        <p className="text-white text-2xl font-bold">Description</p>
                        <p className="text-white text-sm m-3">{game.short_description}</p>
                    </div>
                    <div className="flex justify-around">
                        <div>
                            <p className="text-white text-lg font-bold">Release</p>
                            <p className="text-white text-sm">{game.release_date}</p>
                        </div>
                        <div>
                            <p className="text-white text-lg font-bold">Publisher</p>
                            <p className="text-white text-sm">{game.publisher}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}