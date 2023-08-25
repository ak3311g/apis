import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./clouds.css";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Clouds(props) {

    const divs = [];
    console.log(props.count);

    function rand(){
        return Math.floor(Math.random()*10);
    }

    function top(){
        const val = Math.floor(Math.random()*5);
        return val;
    }

    function darkness(){
        const dark = ["#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563"];
        var i = Math.ceil(props.count/2);
        return dark[i];
    }

    for(let i=0;i<props.count;i++){
        divs.push(
            <div key={i} className={`absolute top-${30+top()} w-[100px] h-[100px]`} style={{animation:`moveRight 20s ease-in-out ${rand()}s infinite`}}>
                <FontAwesomeIcon icon={faCloud} className="text-8xl" 
                    style={{ color: `${darkness()}` }}
                />
            </div>
        )
    }

    return (
        <div className="clouds w-1/2 h-28">
            {divs}
        </div>
    )
}