import React from "react";
import "./Footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PreviousIcon from "@material-ui/icons/SkipPrevious";
import NextIcon from "@material-ui/icons/SkipNext";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistIcon from "@material-ui/icons/PlaylistPlay";
import DeviceIcon from "@material-ui/icons/Devices";
import VolumeIcon from "@material-ui/icons/VolumeUp";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="song-playing-img"
          src="https://picsum.photos/200/200"
          alt="image song playing"
        />
        <div className="song-playing-info">
          <div class="song-playing-name">Suy</div>
          <div class="song-playing-artists">Ngơ</div>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__center_up">
          <ShuffleIcon className="footer__center_icon icon_active" />
          <PreviousIcon className="footer__center_icon" />
          <PlayIcon className="footer__center_icon" style={{ fontSize: 45 }} />
          <NextIcon className="footer__center_icon" />
          <RepeatIcon className="footer__center_icon icon_active" />
        </div>
        <div className="footer__center_down">
          <span className="padding-10">100</span>
          <Slider
            padding="10px"
            defaultValue={30}
            aria-labelledby="continuous-slider"
          />
          <span className="padding-10">200</span>
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
