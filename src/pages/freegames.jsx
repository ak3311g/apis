import { games, filter } from "../api/freegames/getdetails";
import { useState, useEffect } from "react";

export default function FreeGames() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState({
        platform: "",
        category: "",
        sort: "",
    });

    const cat = document.getElementById("category");
    const plat = document.getElementById("platoform");
    const sort = document.getElementById("sort");

    useEffect(() => {
        setLoading(false);
        games(search).then((data) => {
            console.log("all");
            console.log(data);
        });
        filter(search).then((data) => {
            console.log("filter");
            console.log(data);
        });

    }, [search]);

    const handleSearch = () => {
        setSearch({
            platform: plat.value,
            category: cat.value,
        });
    }

    if (loading) {
        return <h1 className="m-20">Loading...</h1>
    }
    else {
        return (
            <>
                <div className="m-20">
                    <div className="pt-3">
                        <p className="font-semibold text-3xl text-green-600 text-center">
                            Got One <br /> For You
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col bg-green-500 p-2 rounded-xl shadow-xl shadow-slate-300 m-3">
                            <p className="">
                                Platform
                            </p>
                            <select className="rounded-md" id="platoform" onChange={()=>handleSearch()}>
                                <option value="all">All</option>
                                <option value="pc">PC</option>
                                <option value="browser">Browser</option>
                            </select>
                        </div>

                        <div className="flex flex-col bg-green-500 p-2 rounded-xl shadow-xl shadow-slate-300 m-3">
                            <p className="">
                                Category
                            </p>
                            <select className="rounded-md" id="category" onChange={()=>handleSearch()}>
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
                    <div className="">

                    </div>
                </div>
            </>
        )
    }
}