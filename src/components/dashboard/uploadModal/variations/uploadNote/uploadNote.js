import React from "react";

import classes from "./uploadNote.module.scss";

const UploadNote = () => {
  return (
    <div className={classes.body}>
      <h2>Upload files</h2>
      <textarea
        className={classes.textarea}
        name="note"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default UploadNote;
