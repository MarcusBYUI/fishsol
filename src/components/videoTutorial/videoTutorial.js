import React from "react";

import BackDrop from "../../hoc/backDrop/backDrop";

import classes from "./videoTutorial.module.scss";

const VideoTutorial = ({ onToggle }) => {
  return (
    <BackDrop onBackDropHandler={onToggle}>
      <video
        autoPlay
        src="https://solid.fish/uploads/6a723b53c6ec419faa826773ae7a6299.mp4"
        className={classes.video}
      ></video>
    </BackDrop>
  );
};

export default VideoTutorial;
