import React from "react";

//Styles
import classes from "./notificationBar.module.scss";

const NotificationBar = ({ isHidden }) => {
  return (
    <div className={`${classes.bar} ${!isHidden ? classes.hidden : ""}`}>
      <p>Notification / alert bar</p>
    </div>
  );
};

export default NotificationBar;
