import axios from "axios";
const Base_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAR8_ZPd8nLO9brfwC2heEgGtj3n7vZQys";

export const fetchApiForYoutubeData = async (
  endpoints,
  params = { params }
) => {
  try {
    const response = await axios.get(`${Base_URL}/${endpoints}`, {
      params: {
        ...params,
        key: API_KEY,
      },
    });
    console.log(`this is the response : ${response.data}`);
    return response.data;
  } catch (error) {
    console.error(error, "error fetching youtube data");
  }
};
