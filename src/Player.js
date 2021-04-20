import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";

const Player = ({ spotify }) => {
  return (
    <div className="spotify">
      <div className="spotify__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
