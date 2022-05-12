import CustomButton from "../../components/customButton/customButton";
import BackDrop from "../../hoc/backDrop/backDrop";
import React from "react";

import classes from "./introMessage.module.scss";

const IntroMessage = ({ onClick }) => {
  return (
    <BackDrop>
      <div className={classes.message}>
        <p className={classes.message_heading}>Intro Message</p>
        <div className={classes.message_body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            purus scelerisque non magna tristique vitae. Sed neque ultrices in
            turpis neque eu amet ut amet. Vivamus sed elit, ornare sapien
            fringilla viverra eget. L
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            purus scelerisque non magna tristique vitae. Sed neque ultrices in
            turpis neque eu amet ut amet. Vivamus sed elit, ornare sapien
            fringilla viverra eget. L
          </p>
        </div>

        <div>
          <CustomButton
            className={classes.message_actions}
            transparent
            onClick={onClick}
          >
            View Content
          </CustomButton>
        </div>
      </div>
    </BackDrop>
  );
};

export default IntroMessage;
