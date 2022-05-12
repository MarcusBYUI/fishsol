import React from "react";

import classes from "./customButton.module.scss";

const CustomButton = ({
  children,
  transparent,
  danger,
  className,
  warning,
  ...btnProps
}) => {
  let btnClass = `${className} ${classes.btn} ${
    transparent && classes.btn_transparent
  }  ${danger && classes.btn_danger}  ${warning && classes.btn_warning} `;
  return (
    <button {...btnProps} className={btnClass}>
      {children}
    </button>
  );
};

export default CustomButton;
