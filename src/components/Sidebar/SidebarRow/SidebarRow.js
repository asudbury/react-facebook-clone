import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h6>{title}</h6>
    </div>
  );
};

export default SidebarRow;
