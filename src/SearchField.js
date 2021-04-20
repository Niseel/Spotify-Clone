import React, { useEffect, useState } from "react";
import "./SearchField.css";
import { useDateLayerValue } from "./DataLayer";
import TrackSearchResult from "./TrackSearchResult";
import SpotifyPlayer from "react-spotify-web-playback";
import DizzTrack from "./DizzTrack";

import SearchIcon from "@material-ui/icons/SearchOutlined";

function SearchField({ spotify }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  const [{ currentTrack }, dispatch] = useDateLayerValue();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (playingTrack) {
      dispatch({
        type: "SET_TRACK",
        currentTrack: playingTrack,
      });
    }
  }, [playingTrack]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    let cancel = false;

    spotify.searchTracks(search).then((res) => {
      setSearchResults(
        res.tracks.items.map((track) => {
          //console.log(track);
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            preview_url: track.preview_url,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search]);

  return (
    <div>
      <div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="name" className="form__label">
            Search your song
          </label>
        </div>
      </div>
      <div>
        {searchResults.slice(0, 6).map(
          (track, index) =>
            (index < 5 && (
              <TrackSearchResult
                track={track}
                key={track.uri}
                chooseTrack={chooseTrack}
              />
            )) || (
              <div
                onClick={() => {
                  console.log("log");
                }}
                className="searchAll"
              >
                <SearchIcon />
                <span className="searchAll-text">All songs</span>
              </div>
            )
        )}
        {}
      </div>
      <div>
        <DizzTrack track={playingTrack} trackUri={playingTrack?.preview_url} />
      </div>
    </div>
  );
}

export default SearchField;
