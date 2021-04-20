import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDateLayerValue } from "./DataLayer";
import SearchField from "./SearchField";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import ForwardIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandIcon from "@material-ui/icons/ExpandMore";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDateLayerValue();

  // useEffect(() => {
  //   dispatch({
  //     type: "SET_USER",
  //     user: { display_name: "Con khung long" },
  //   });
  // }, [user]);

  return (
    <div className="header">
      <div className="header__left">
        {/* <BackIcon />
        <ForwardIcon /> */}
        <SearchField spotify={spotify} />
      </div>

      <div className="header__right">
        <div className="user_info">
          <img src={user?.images[0]?.url} alt="avt of user" />
          <p className="text-collapse">{user?.display_name}</p>
          <ExpandIcon className="extra_icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
