import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { useDateLayerValue } from "./DataLayer";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PreviousIcon from "@material-ui/icons/SkipPrevious";
import NextIcon from "@material-ui/icons/SkipNext";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistIcon from "@material-ui/icons/PlaylistPlay";
import PauseListIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import DeviceIcon from "@material-ui/icons/Devices";
import VolumeIcon from "@material-ui/icons/VolumeUp";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  const [{ currentTrack }, dispatch] = useDateLayerValue();
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
  };

  useEffect(() => {
    changeAudioStatus(false);
  }, [currentTrack]);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="song-playing-img"
          src={
            currentTrack.albumUrl
              ? currentTrack.albumUrl
              : "https://picsum.photos/60/60"
          }
          alt="image song playing"
        />
        <div className="song-playing-info">
          <div className="song-playing-name">
            {currentTrack.title ? currentTrack.title : "Unknown"}
          </div>
          <div className="song-playing-artists">
            {currentTrack.artist ? currentTrack?.artist : "Unknown"}
          </div>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__center_up">
          <ShuffleIcon className="footer__center_icon icon_active" />
          <PreviousIcon className="footer__center_icon" />
          <audio ref={myRef} src={currentTrack.preview_url} />
          {audioStatus ? (
            <PauseListIcon
              onClick={pauseAudio}
              className="footer__center_icon"
              style={{ fontSize: 45 }}
            />
          ) : (
            <PlayIcon
              onClick={startAudio}
              className="footer__center_icon"
              style={{ fontSize: 45 }}
            />
          )}
          <NextIcon className="footer__center_icon" />
          <RepeatIcon className="footer__center_icon icon_active" />
        </div>
        <div className="footer__center_down">
          <span className="padding-10">0:00</span>
          <Slider
            padding="10px"
            defaultValue={0}
            aria-labelledby="continuous-slider"
          />
          <span className="padding-10">0:30</span>
        </div>
      </div>
      <div className="footer__right">
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item>
            <PlaylistIcon fontSize="small" />
          </Grid>
          <Grid item>
            <DeviceIcon fontSize="small" />
          </Grid>
          <Grid item>
            <VolumeIcon fontSize="small" />
          </Grid>
          <Grid item xs>
            <Slider defaultValue={30} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
