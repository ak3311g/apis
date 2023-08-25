import { useState } from "react"

export default function Humidity(props){

    const [humidityvalue, setHumidity] = useState(props.humidity);

    if(humidityvalue != props.humidity){
        setHumidity(props.humidity);
    }

    const rand = Math.floor(Math.random() * 100) + 1;
    
    return(
        <>
            <div>
                <h3 className="mt-6 font-semibold text-lg">Humidity</h3>
                <div className="w-16 h-[100px] border-[3px] flex flex-col-reverse border-x-black border-b-black overflow-hidden rounded-b-lg">
                    <div className={`w-15 bg-blue-500 flex`}
                        style={{ height: `${humidityvalue}px` }}
                    >
                        <div className="w-[30px] h-[20px] bg-blue-500 rounded-xl relative bottom-2 animate-spin"/>
                        <div className="w-[30px] h-[20px] bg-blue-500 rounded-xl relative bottom-2 animate-spin"/>
                        <div className="w-[30px] h-[20px] bg-blue-500 rounded-xl relative bottom-2 animate-spin"/>
                        <div className="w-[30px] h-[20px] bg-blue-500 rounded-xl relative bottom-2 animate-spin"/>
                        <div className="w-[30px] h-[20px] bg-blue-500 rounded-xl relative bottom-2 animate-spin"/>
                    </div>
                </div>
                <div className="flex justify-center items-center font-semibold text-xl">
                        {humidityvalue}%
                    </div>
            </div>
        </>
    )
}