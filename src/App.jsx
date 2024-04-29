import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Landing from "./Pages/Landing";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
