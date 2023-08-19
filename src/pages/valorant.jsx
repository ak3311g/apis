import getValoData from "../fetchapi.js/valoapi.jsx";
import { useEffect, useState } from "react";

export default function Valorant() {

    const [valdata,setdata] = useState([]);

    useEffect(() => {
    getValoData().then((data) => {
        const valoData = data;
        setdata(valoData.data);
        console.log(valoData.data);
        return data;
    });
    }, []);

    return(
        <>
            <h1>Valorant</h1>
            <div>
                {
                    valdata.map((valo) => {
                        if(valo.isPlayableCharacter)
                        return(
                            <div key={valo.uuid} style={{background:`url(${valo.background})`}}>
                                <h2>{valo.displayName}</h2>
                                <img src={valo.displayIcon} alt={valo.displayName} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}