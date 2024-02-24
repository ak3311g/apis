import { games, filter } from "../api/freegames/getdetails";
import { useState, useEffect } from "react";
import GameCard from "../components/gamecard";

export default function FreeGames() {

    const [data, setData] = useState(null);
    const [tags, setTags] = useState(
        {
            "mmorpg": false,
            "shooter": false,
            "strategy": false,
            "moba": false,
            "racing": false,
            "sports": false,
            "social": false,
            "sandbox": false,
            "open-world": false,
            "survival": false,
            "pvp": false,
            "pve": false,
            "pixel": false,
            "voxel": false,
            "zombie": false,
            "turn-based": false,
            "first-person": false,
            "third-Person": false,
            "top-down": false,
            "tank": false,
            "space": false,
            "sailing": false,
            "side-scroller": false,
            "superhero": false,
            "permadeath": false,
            "card": false,
            "battle-royale": false,
            "mmo": false,
            "mmofps": false,
            "mmotps": false,
            "3d": false,
            "2d": false,
            "anime": false,
            "fantasy": false,
            "sci-fi": false,
            "fighting": false,
            "action-rpg": false,
            "action": false,
            "military": false,
            "martial-arts": false,
            "flight": false,
            "low-spec": false,
            "tower-defense": false,
            "horror": false,
            "mmorts": false,
        }
    );
    const [filterval, setFilter] = useState(false);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState({
        platform: "",
        category: "",
    });

    const cat = document.getElementById("category");
    const plat = document.getElementById("platoform");

    useEffect(() => {
        if (!filterval)
            games(search).then((data) => {
                setData(data);
                console.log(data);
            });
        else
            filter(search).then((data) => {
                if(data.status!=0)
                {setData(data);
                console.log(data);}
                else
                setData(null);
            });

        setLoading(false);

    }, [search]);

    const handleFilter = () => {
        let temp = "";
        Object.keys(tags).map((tag) => {
            if (tags[tag]) {
                temp += tag + ".";
            }
        });
        setSearch({
            platform: plat.value,
            tag: temp,
        });
    }
    
    const handleSearch = () => {
        if (plat.value === "All" && cat.value === "All") {
            setSearch({
                platform: "",
                category: "",
            });
        }
        else {
            setSearch({
                platform: plat.value,
                category: cat.value,
            });
        }
    }

    if (loading) {
        return (
            <>
                <div className="">
                    <h1 className="mt-20 mx-4">Loading...</h1>
                    {
                        filterval ? (
                            <div className="flex justify-center items-center flex-col sm:flex-row">
                                <button className="bg-green-500 p-2 rounded-xl shadow-xl shadow-slate-300 m-3 w-full sm:w-32" onClick={() => setFilter(false)}>
                                    Category
                                </button>
                            </div>) : (
                            <div className="flex justify-center items-center flex-col sm:flex-row">
                                <button className="bg-green-500 p-2 rounded-xl shadow-xl shadow-slate-300 m-3 w-full sm:w-32" onClick={() => setFilter(true)}>
                                    Filter
                                </button>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="mt-20 mx-4">
                    <div className="pt-3">
                        <p className="font-bold text-xl md:text-4xl text-white uppercase text-center">
                            Got One For You
                        </p>
                        {
                            filterval ? (
                                <div className="flex justify-center items-center flex-col sm:flex-row">
                                    <button className="bg-green-500 p-2 rounded-xl shadow-xl shadow-slate-300 m-3 w-full sm:w-32" onClick={() => setFilter(false)}>
                                        Category
                                    </button>
                                </div>) : (
                                <div className="flex justify-center items-center flex-col sm:flex-row">
                                    <button className="bg-blue-500 text-xl font-semibold text-center p-2  m-3 w-full sm:w-32" onClick={() => setFilter(true)}>
                                        Filter
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    {
                        filterval ? (
                            <div className="flex justify-center items-center flex-col">
                                <div className="flex flex-col bg-blue-500 text-xl font-semibold text-center p-2  m-3 w-full sm:w-32">
                                    <p className="">
                                        Platform
                                    </p>
                                    <select className=" m-2 text-center" id="platoform">
                                        <option value="all">All</option>
                                        <option value="pc">PC</option>
                                        <option value="browser">Browser</option>
                                    </select>
                                </div>

                                <div className="flex bg-blue-500 text-xl font-semibold text-center p-2  m-3 w-full">
                                    <p className="">
                                        Tags
                                    </p>
                                    <div className="flex flex-wrap">
                                        {
                                            Object.keys(tags).map((tag) => (
                                                <div key={tag} className="flex flex-row items-center m-1">
                                                    <input type="checkbox" id={tag} name={tag} value={tag} onChange={() => {
                                                        setTags({ ...tags, [tag]: !tags[tag] });
                                                    }} />
                                                    <label htmlFor={tag} className="ml-1">{tag}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-blue-500 text-xl font-semibold text-center p-2  m-3 w-full sm:w-40" onClick={() => {
                                        handleFilter();
                                    }}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex justify-center items-center flex-col sm:flex-row">
                                    <div className="flex flex-col bg-blue-500 text-xl font-semibold text-center p-2  m-3 w-full sm:w-32">
                                        <p className="">
                                            Platform
                                        </p>
                                        <select className=" m-2 text-center" id="platoform" onChange={() => handleSearch()}>
                                            <option value="all">All</option>
                                            <option value="pc">PC</option>
                                            <option value="browser">Browser</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col bg-blue-500 text-xl font-semibold text-center p-2  m-3 w-full sm:w-40">
                                        <p className="">
                                            Category
                                        </p>
                                        <select className=" m-2 text-center" id="category" onChange={() => handleSearch()}>
                                            <option value="all">All</option>
                                            <option value="mmorpg">MMORPG</option>
                                            <option value="shooter">Shooter</option>
                                            <option value="strategy">Strategy</option>
                                            <option value="moba">MOBA</option>
                                            <option value="racing">Racing</option>
                                            <option value="sports">Sports</option>
                                            <option value="social">Social</option>
                                            <option value="sandbox">Sandbox</option>
                                            <option value="open-world">Open World</option>
                                            <option value="survival">Survival</option>
                                            <option value="pvp">PvP</option>
                                            <option value="pve">PvE</option>
                                            <option value="pixel">Pixel</option>
                                            <option value="voxel">Voxel</option>
                                            <option value="zombie">Zombie</option>
                                            <option value="turn-based">Turn Based</option>
                                            <option value="first-person">First Person</option>
                                            <option value="third-Person">Third Person</option>
                                            <option value="top-down">Top-Down</option>
                                            <option value="tank">Tank</option>
                                            <option value="space">Space</option>
                                            <option value="sailing">Sailing</option>
                                            <option value="side-scroller">Side Scroller</option>
                                            <option value="superhero">Superhero</option>
                                            <option value="permadeath">Permadeath</option>
                                            <option value="card">Card</option>
                                            <option value="battle-royale">Battle Royale</option>
                                            <option value="mmo">MMO</option>
                                            <option value="mmofps">MMOFPS</option>
                                            <option value="mmotps">MMOTPS</option>
                                            <option value="3d">3D</option>
                                            <option value="2d">2D</option>
                                            <option value="anime">Anime</option>
                                            <option value="fantasy">Fantasy</option>
                                            <option value="sci-fi">Sci-Fi</option>
                                            <option value="fighting">Fighting</option>
                                            <option value="action-rpg">Action RPG</option>
                                            <option value="action">Action</option>
                                            <option value="military">Military</option>
                                            <option value="martial-arts">Martial Arts</option>
                                            <option value="flight">Flight</option>
                                            <option value="low-spec">Low-Spec</option>
                                            <option value="tower-defense">Tower Defense</option>
                                            <option value="horror">Horror</option>
                                            <option value="mmorts">MMORTS</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className="w-full sm:grid grid-cols-2 gap-2 lg:grid-cols-3">
                        {
                            data ?
                                (filterval ? (
                                    data.map((game) => (
                                        <GameCard key={game.id} game={game} />
                                    ))
                                ) : (
                                    data.map((game) => (
                                        <GameCard key={game.id} game={game} />
                                    ))
                                )) : (
                                    <h1 className="text-2xl text-center">No Games Found</h1>
                                )
                        }
                    </div>
                </div>
            </>
        )
    }
}