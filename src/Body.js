import React, { useState, useEffect } from "react";
import { useDateLayerValue } from "./DataLayer";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify, track }) {
  const [{ playlists, discover_weekly }, dispatch] = useDateLayerValue();

  useEffect(() => {
    dispatch({
      type: "SET_HOME_SET_PLAYLISTS",
      discover_weekly: spotify.discover_weekly,
    });
  }, [spotify.discover_weekly]);

  const playPlaylist = () => {};
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        {playlists?.items?.map((playlist) => playlist.id)}
      </div>
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayIcon className="body__shuffle" onClick={playPlaylist} />
          <FavoriteIcon className="favo_" fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
