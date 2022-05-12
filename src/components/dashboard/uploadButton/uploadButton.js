import React, { useState } from "react";

//Styles
import classes from "./uploadButton.module.scss";

const UPLOAD_OPTIONS = { file: "FILE", text: "TEXT", link: "LINK" };

const UploadButton = ({ setUpload }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={classes.add}>
      <button
        className={`${classes.add_toggle} ${
          isActive && classes.add_toggle_active
        }`}
        onClick={toggleMenu}
      >
        <img src={require("../../../assets/icons/add.png")} alt="add" />
      </button>

      {isActive && (
        <div className={classes.add_options}>
          <div
            className={classes.option}
            onClick={setUpload.bind(this, UPLOAD_OPTIONS.file)}
          >
            <img
              src={require("../../../assets/icons/upload_file.png")}
              alt="file"
            />
            <div className={classes.option_tooltip}>
              <p>Files</p>
            </div>
          </div>

          <div
            className={classes.option}
            onClick={setUpload.bind(this, UPLOAD_OPTIONS.link)}
          >
            <img
              src={require("../../../assets/icons/upload_link.png")}
              alt="link"
            />
            <div className={classes.option_tooltip}>
              <p>Link</p>
            </div>
          </div>

          <div
            className={classes.option}
            onClick={setUpload.bind(this, UPLOAD_OPTIONS.text)}
          >
            <img
              src={require("../../../assets/icons/upload_text.png")}
              alt="text"
            />
            <div className={classes.option_tooltip}>
              <p>Message</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadButton;
