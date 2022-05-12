import React from "react";

//Styles
import classes from "./saveCode.module.scss";

const SaveCode = () => {
  return (
    <div className={classes.body}>
      <h2>Save your solidcode</h2>
      <p>Choose a method to access and manage your solidcode settings</p>
      <div className={classes.choices}>
        <div className={classes.choices_patern}></div>
        <div className={classes.choices_separator}>
          <div className={classes.line}></div>
          <p>or</p>

          <div className={classes.line}></div>
        </div>
        <div className={classes.choices_pin}>
          <p>Create a 5-digit PIN</p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default SaveCode;
