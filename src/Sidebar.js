import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { useDateLayerValue } from "./DataLayer";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import LibraryIcon from "@material-ui/icons/VideoLibraryOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Sidebar() {
  const [{ playlists }, dispatch] = useDateLayerValue();
  return (
    <div className="sidebar">
      {/*<img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />*/}
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryIcon} title="Your Library" />
      <div className="margin-bottom"></div>
      <SidebarOption Icon={AddBoxIcon} title="Create Playlist" />
      <SidebarOption Icon={FavoriteIcon} title="Liked Songs" />
      <div className="line-bottom"></div>
      {playlists?.items?.map((playlist, key) => (
        <SidebarOption title={playlist.name} key={playlist.id} padding="0" />
      ))}
    </div>
  );
}

export default Sidebar;
