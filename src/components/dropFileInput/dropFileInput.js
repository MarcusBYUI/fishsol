import React, { useRef } from "react";

import classes from "./dropFileInput.module.scss";

const DropFileInput = ({ onFileUpload, className }) => {
  const wrappedRef = useRef(null);

  return (
    <div className={`${classes.wrapper} ${className} `} ref={wrappedRef}>
      <input type="file" name="uploadFiles" onChange={onFileUpload} />
    </div>
  );
};

export default DropFileInput;
