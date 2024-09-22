import axios from "axios";
const Base_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDZpqSIcpEC0YOc6z-_BMjKyPALQh3n5yg";

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
