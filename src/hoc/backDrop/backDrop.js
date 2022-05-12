import React from "react";

//Styles
import classes from "./backDrop.module.scss";

const BackDrop = ({ children, onBackDropHandler }) => {
  return (
    <div className={classes.wrapper}>
      {children}
      <div onClick={onBackDropHandler} className={classes.backDrop}></div>
    </div>
  );
};

export default BackDrop;
