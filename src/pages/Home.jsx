import Hub from "./hub";

export default function Home() {
    return (
        <>
        <div className="pt-20">
            <Hub />
        </div>
        <p className="bg-black text-white absolute bottom-0 left-1 p-3">
          Sorry for inconvenience but some APIs are not working because of protocols issue
          they uses http but netlify only allow https sites are:
          <ul>
            <li>Marvel</li>
            <li>Weather</li>
          </ul>
        </p>
        </>
    )
}