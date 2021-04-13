import React, { useEffect, useState } from "react";
import "./SearchField.css";
import { useDateLayerValue } from "./DataLayer";
import TrackSearchResult from "./TrackSearchResult";
import SpotifyPlayer from "react-spotify-web-playback";
import DizzTrack from "./DizzTrack";

function SearchField({ spotify }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (!search) return setSearchResults([]);
    let cancel = false;

    spotify.searchTracks(search).then((res) => {
      // res.tracks.items.map((item) => {
      //   console.log("Name: ", item.name);
      // });
      setSearchResults(
        res.tracks.items.map((track) => {
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
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <div>
        <DizzTrack trackUri={playingTrack?.preview_url} />
      </div>
    </div>
  );
}

export default SearchField;
