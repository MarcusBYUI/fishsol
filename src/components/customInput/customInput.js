import React from "react";

//Styles
import classes from "./customInput.module.scss";

const CustomInput = ({ ...inputProps }) => {
  return (
    <input
      {...inputProps}
      type={inputProps.type || "text"}
      className={classes.inputBox}
    />
  );
};

export default CustomInput;
