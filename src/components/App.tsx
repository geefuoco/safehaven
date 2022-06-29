import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
    </>
  );
};

export default App;
