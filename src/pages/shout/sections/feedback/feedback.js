import CustomButton from "../../../../components/customButton/customButton";
import CustomInput from "../../../../components/customInput/customInput";
import React from "react";

import classes from "./feedback.module.scss";

const Feedback = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.feedback}>
        <img
          src={require("../../../../assets/feedback_smudge.png")}
          alt=""
          className={classes.feedback_smudge}
        />
        <div className={classes.feedback_form}>
          <h2>Share your feedback & comments</h2>
          <div className={classes.stars}></div>
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Email Address" />
          <CustomInput placeholder="Message" />
          <div className={classes.feedback_form_actions}>
            <CustomButton warning>Submit</CustomButton>
          </div>
        </div>

        <div className={classes.feedback_img}>
          <img src={require("../../../../assets/feedback.png")} alt="feedback" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
