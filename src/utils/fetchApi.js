import axios from "axios";
const Base_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBWmJSm21rWI6823I_RL032Ll1W1QKlVuY";

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

    return response.data;
  } catch (error) {
    console.error(error, "error fetching youtube data");
  }
};
