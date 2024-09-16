import React from "react";
import Header from "./components/HeaderSection/Header";
import Feed from "./components/FeedSection/Feed";
import SearchVideoResult from "./components/SearchSection/SearchVideoResult";
import VideoDetails from "./components/VideoSection/VideoDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./useContextHook/useContextApi";
import { ThemeProvider } from "./useContextHook/useTheme";

function App() {
  return (
    <AppContext>
      <ThemeProvider>
        <BrowserRouter>
          <div className='flex flex-col w-full'>
            <Header />
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route
                path='/search/:searchQuery'
                element={<SearchVideoResult />}
              />
              <Route
                path='/video/:categoryId/:videoId'
                element={<VideoDetails />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext>
  );
}

export default App;
