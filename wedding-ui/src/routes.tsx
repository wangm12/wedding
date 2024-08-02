import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import StoryPage from "./pages/story";
import GalleryPage from "./pages/gallery";
import SeatsPage from "./pages/seats";
import CalendarPage from "./pages/calendar";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="story" element={<StoryPage />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="seats" element={<SeatsPage />} />
    </Routes>
  );
};

export default MainRouter;
