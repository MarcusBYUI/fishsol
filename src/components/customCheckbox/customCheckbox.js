import React from "react";

import classes from "./customCheckbox.module.scss";

const CustomCheckbox = ({ name, children, ...otherProps }) => {
  return (
    <label className={classes.check}>
      {children}
      <input {...otherProps} type="checkbox" />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default CustomCheckbox;
