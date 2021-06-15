import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

const Story = ({ image, profileSrc, title }) => {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <Avatar src={profileSrc} className="storyAvatar" />
      <h6>{title}</h6>
    </div>
  );
};

export default Story;
