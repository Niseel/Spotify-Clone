import React from "react";
import "./TrackSearchResult.css";

function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
    console.log("clicked");
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}

export default TrackSearchResult;
