import CustomCheckbox from "../../../../../components/customCheckbox/customCheckbox";
import React from "react";

import classes from "./configureCode.module.scss";

const ConfigureCode = () => {
  return (
    <div className={classes.body}>
      <h2>Configure your solidcode</h2>
      <div>
        <p>Intro message (Optional)</p>
        <textarea
          className={classes.textarea}
          name="note"
          id=""
          cols="30"
          rows="2"
        ></textarea>
      </div>

      <div>
        <p>Password protection</p>
        <input type="text" />
      </div>
      <div className={classes.settings}>
        <p>Settings</p>

        <CustomCheckbox>Disallow copy and paste</CustomCheckbox>
        <CustomCheckbox>Enable one-time access</CustomCheckbox>
        <CustomCheckbox>Shielded sharing</CustomCheckbox>
      </div>
    </div>
  );
};

export default ConfigureCode;
