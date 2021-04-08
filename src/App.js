import React, { useEffect, useState } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./Login";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import { useDateLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDateLayerValue();
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

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    // console.log("I have token: ", _token);
  }, []);
  // console.log("My User: ", user);
  // console.log("My Token: ", token);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
