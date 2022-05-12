import React from "react";

import classes from "./tutorial.module.scss";

const Tutorial = () => {
  return (
    <section className={classes.features}>
      <img
        src={require("../../../../assets/video_bg.png")}
        alt=""
        className={classes.video_bg}
      />

      <div className={classes.details}>
        <img
          src={require("../../../../assets/feature_bg.png")}
          alt=""
          className={classes.details_bg}
        />

        <div className={classes.details_row}>
          <img
            src={require("../../../../assets/features.png")}
            alt=""
            className={classes.details_row_img}
          />

          <div className={classes.details_row_text}>
            <h1> Designed for everyday data sharing </h1>
            <div className={classes.row}>
              <div className={classes.card}>
                <div className={classes.card_heading}>
                  <img
                    src={require("../../../../assets/icons/details1.png")}
                    alt="No links"
                  />
                  <h3>No links</h3>
                </div>
                <p>
                  Say Goodbye to web links that can be spoofed. Say hello to
                  Solidcodes that can be securely exchanged through any media
                  (voice, paper or the internet).
                </p>
              </div>

              <div className={classes.card}>
                <div className={classes.card_heading}>
                  <img
                    src={require("../../../../assets/icons/details2.png")}
                    alt="No links"
                  />
                  <h3>Secure</h3>
                </div>
                <p>
                  Password encryption supported. Only password holders can
                  decrypt your data. No personal information collected. Keep
                  Spam away with Shielded Sharing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.details_row}>
          <img
            src={require("../../../../assets/features2.png")}
            alt=""
            className={classes.details_row_img}
          />

          <div className={classes.details_row_text}>
            <div className={classes.card}>
              <div className={classes.card_heading}>
                <img
                  src={require("../../../../assets/icons/details3.png")}
                  alt="No links"
                />
                <h3>green</h3>
              </div>
              <p>
                With our self-destructive data feature, we can recycle data
                storage, thereby reducing the need for more resource-consuming
                data centres.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.video}>
        <h1 className={classes.video_heading}>
          Share temporary or trivial media the right way
        </h1>
        <div className={classes.video_content}>
          <div className={classes.video_content_side}>
            <img
              src={require("../../../../assets/icons/arrow_left.png")}
              alt="Left"
            />
          </div>

          <div className={classes.video_content_main}>
            <img
              src={require("../../../../assets/video1.png")}
              alt="Video"
              className={classes.video_content_main_icon_1}
            />
            <img
              src={require("../../../../assets/video2.png")}
              alt="Video"
              className={classes.video_content_main_icon_2}
            />
            <img
              src={require("../../../../assets/video3.png")}
              alt="Video"
              className={classes.video_content_main_icon_3}
            />
            <video src="https://solid.fish/uploads/ef5b209b591c4c8680c1e856505a2980.mp4"></video>
          </div>

          <div className={classes.video_content_side}>
            <img
              src={require("../../../../assets/icons/arrow_right.png")}
              alt="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
