import React, { useState, useEffect } from "react";
import { useDateLayerValue } from "./DataLayer";
import SpotifyPlayer from "react-spotify-web-playback";

export default function DizzTrack({ trackUri }) {
  const [{ token }, dispatch] = useDateLayerValue();
  const [trackPre, setTrackPre] = useState(trackUri);
  useEffect(() => setTrackPre(trackUri), [trackPre]);
  return (
    <div>
      {/* {token} */}
      <audio controls>
        <source src={trackPre} />
      </audio>
    </div>
  );
}
