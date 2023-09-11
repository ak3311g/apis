import API_URI from "./apiconfig";


import axios from 'axios';

const games = async (data) => {
    const param = {

    };

    if (data.platform) {
        param.platform = data.platform;
    }

    if (data.category!=="all"&&data.category!=="") {
        param.category = data.category;
    }


const options = {
  method: 'GET',
  url: API_URI.endpoint+"games",
  params:param,
  headers: {
    'X-RapidAPI-Key': '1e435dd14amsh8a25afd2bb8415fp1a1f02jsnb7466192ac72',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}
}

const filter = async (data) => {
    const param = {};

    if (data.tag) {
        param.tag = data.tag;
    }
    else
    param.tag = "action";

    if (data.platform) {
        param.platform = data.platform;
    }


const options = {
  method: 'GET',
  url: API_URI.endpoint+"filter",
  params:param,
  headers: {
    'X-RapidAPI-Key': '1e435dd14amsh8a25afd2bb8415fp1a1f02jsnb7466192ac72',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}
}

export { games, filter};