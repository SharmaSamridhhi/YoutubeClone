import React, { useContext, useEffect, useState, createContext } from "react";
import { fetchApiForYoutubeData } from "../utils/fetchApi";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchYoutubeData = async (params) => {
    setLoading(true);
    try {
      const res = await fetchApiForYoutubeData("videos", params);
      setVideoData(res.items);
      console.log(res.items);
    } catch (error) {
      console.error(error, "error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedCategory) return;

    const params = {
      part: "snippet,contentDetails,statistics",
      chart: "most-popular",
      regionCode: "IN",
      maxResults: 10,
      ...(selectedCategory !== "Home" && { videoCategoryId: selectedCategory }),
    };

    fetchYoutubeData(params);
  }, [selectedCategory]);

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        setMobileMenu,
        mobileMenu,
        loading,
        setLoading,
        videoData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};
