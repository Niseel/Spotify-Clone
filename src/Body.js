import React from "react";
import { useDateLayerValue } from "./DataLayer";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  const [{ playlists }, dispatch] = useDateLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        {playlists?.items?.map((playlist) => playlist.id)}
      </div>
    </div>
  );
}

export default Body;
