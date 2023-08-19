import axios from "axios";

const getValoData = async () => {
    const url = "https://valorant-api.com/v1/agents";
    const response = await axios.get(url);
    const data = response.data;
    return data;
}

export default getValoData;