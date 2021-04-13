import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, padding }) {
  return (
    <div
      className="sidebarOption"
      style={padding && { padding: "0px 0px 0px 15px" }}
    >
      {Icon && (
        <Icon style={{ fontSize: 30 }} className="sidebarOption__icon" />
      )}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
