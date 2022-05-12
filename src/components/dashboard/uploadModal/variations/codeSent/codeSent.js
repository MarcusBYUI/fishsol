import CustomButton from "../../../../../components/customButton/customButton";
import React from "react";

import classes from "./codeSent.module.scss";

const CodeSent = ({ onModalClose }) => {
  return (
    <div className={classes.modal}>
      <div onClick={onModalClose} className={classes.modal_heading}>
        <img src={require("../../../../../assets/icons/exit.svg").default} alt="" />
      </div>
      <h1>Sent</h1>
      <div className={classes.code}>
        <p>Solidcode</p>
        <p className={classes.code_main}>3218-29038</p>
      </div>
      <div className={classes.social}>
        <img src={require("../../../../../assets/icons/instagram.svg").default} alt="" />
        <img src={require("../../../../../assets/icons/twitter.svg").default} alt="" />
        <img src={require("../../../../../assets/icons/youtube.svg").default} alt="" />
      </div>
      <CustomButton className={classes.modal_btn} transparent>
        OK
      </CustomButton>
    </div>
  );
};

export default CodeSent;
