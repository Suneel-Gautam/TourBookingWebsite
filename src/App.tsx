import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
