import React from "react";

import classes from "./manageExpiration.module.scss";

const ManageExpiration = () => {
  return (
    <div className={classes.body}>
      <h2>Solidcode will expire</h2>

      <div className={classes.expirationList}>
        <div className={classes.expirationList_item}>End of today</div>
        <div className={classes.expirationList_item}>End of today</div>
        <div className={classes.expirationList_item}>End of today</div>
        <div className={classes.expirationList_item}>End of today</div>
        <div className={classes.expirationList_item}>End of today</div>
      </div>
      <p className={classes.bottomText}>
        Your Solidcode will expire in 10 hours (February 25, 2022 at 11:59 PM)
      </p>
    </div>
  );
};

export default ManageExpiration;
