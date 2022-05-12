import React from "react";

//Components
import Header from "../../../../components/header/header";
import CustomButton from "../../../../components/customButton/customButton";

//Styles
import classes from "./landing.module.scss";

const Landing = () => {
  return (
    <section className={classes.landing}>
      <Header />
      <div className={classes.content}>
        <div className={classes.content_text}>
          <h1>A Self-destructing Data Sharing Platform</h1>
          <p>
            Send your trivial or temporary data through Solidfish to better
            control access to and clean up information stored on the internet.
          </p>

          <div className={classes.content_text_actions}>
            <CustomButton transparent>Learn more</CustomButton>
            <CustomButton warning>watch video</CustomButton>
          </div>
        </div>

        <img
          className={classes.content_img}
          src={require("../../../../assets/landing.png")}
          alt="SolidFish"
        />
      </div>
    </section>
  );
};

export default Landing;
