import React from "react";

//Components
import BackDrop from "../../hoc/backDrop/backDrop";

//Styles
import classes from "./loadingOverlay.module.scss";

const LoadingOverlay = () => {
  return (
    <BackDrop>
      <div className={classes.loader}></div>
    </BackDrop>
  );
};

export default LoadingOverlay;
