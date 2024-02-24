import { Link } from "react-router-dom";

export default function HubTab({ title, link, element, image }) {
    return (
        <>
            <Link to={link} className="parent rounded-xl" style={{background: `url(/hub/${image})`}}>
                <div className="child flex justify-center items-center rounded-lg">
                    <h1 className="text-xl uppercase sm:text-4xl font-bold">{title}</h1>
                </div>
            </Link>
        </>
    )
}