import React, { useEffect, useState } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./Login";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import { useDateLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [
    { user, token, playlists, currentTrack },
    dispatch,
  ] = useDateLayerValue();
  //Biến user trên như là DataLayer trong minh họa v
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_TRACK",
        currentTrack: currentTrack,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_HOME_SET_PLAYLISTS",
          discover_weekly: response,
        })
      );
    }

    // console.log("I have token: ", _token);
  }, []);
  console.log("My User: ", user);
  console.log("My Token: ", token);
  console.log("My Playlist: ", playlists);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
