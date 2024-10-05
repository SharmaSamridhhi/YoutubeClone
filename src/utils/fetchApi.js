import axios from "axios";
const Base_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

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
