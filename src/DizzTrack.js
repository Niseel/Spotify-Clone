import React, { useState, useEffect, useRef } from "react";
import { useDateLayerValue } from "./DataLayer";

export default function DizzTrack({ track, trackUri }) {
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    //console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
  };

  useEffect(() => {
    changeAudioStatus(false);
  }, [trackUri]);

  if (!trackUri) return null;

  return (
    <div>
      <audio ref={myRef} src={trackUri} />
      {/* {audioStatus ? (
        <button onClick={pauseAudio}>pause</button>
      ) : (
        <button onClick={startAudio}>start</button>
      )} */}
    </div>
  );
}
