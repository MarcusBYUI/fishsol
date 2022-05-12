import React from "react";

import classes from "./about.module.scss";

const About = () => {
  return (
    <section className={classes.wrapper}>
      <img
        src={require("../../../../assets/about_smudge_left.png")}
        alt="About"
        className={classes.about_smudge_left}
      />
      <img
        src={require("../../../../assets/about_smudge_right.png")}
        alt="About"
        className={classes.about_smudge_right}
      />
      <div className={classes.about}>
        <div className={classes.about_details}>
          <div className={classes.about_row}>
            <div className={classes.about_row_img}>
              <img
                src={require("../../../../assets/about_1.png")}
                alt="About"
              />
            </div>
            <div className={classes.about_row_text}>
              <h1>our mission</h1>
              <p>
                We are on a mission to facilitate a green internet revolution.
                Short and sweet right? Yes! More time for action, we like to
                say. SolidFish platform is the very first tool in our arsenal to
                achieve this. It is a free data-sharing platform with some new
                tricks up its sleeves. We encourage you to try it and join our
                revolution to keep the internet green and sustainable.
              </p>
            </div>
          </div>

          <div className={classes.about_row}>
            <div className={classes.about_row_img}>
              <img
                src={require("../../../../assets/about_2.png")}
                alt="About"
              />
            </div>
            <div className={classes.about_row_text}>
              <h1>the need</h1>
              <p>
                We have taken the very simple concept of data-sharing and tweak
                it a little bit. We understand the need for you and everyone
                around you to share data on the internet. That is great! But we
                also understand your need for privacy and sometimes your want to
                share data of fleeting importance, in other words, trivial data
                or as we like to call it Blobfish.
              </p>
            </div>
          </div>

          <div className={classes.about_row}>
            <div className={classes.about_row_img}>
              <img
                src={require("../../../../assets/about_3.png")}
                alt="About"
              />
            </div>
            <div className={classes.about_row_text}>
              <h1>solidfish</h1>
              <p>
                SolidFish is here to help you share these types of data and get
                rid of them once they aren't needed anymore. This way we hope to
                curb the ever-increasing data storage requirements around the
                world. And at the same time give you some well-deserved privacy
                and security on the internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
