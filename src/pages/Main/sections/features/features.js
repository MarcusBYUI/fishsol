import React from "react";

import classes from "./features.module.scss";

const Features = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.features}>
        <div className={classes.header}>
          <img
            src={require("../../../../assets/devices.png")}
            alt=""
            className={classes.header_img}
          />
          <div className={classes.header_text}>
            <h1>Accessible on mobile and desktop. No registration needed. </h1>
          </div>
        </div>

        <div className={classes.features_main}>
          <h2>Features</h2>

          <div className={classes.features_grid}>
            <div className={classes.feature}>
              <img
                src={require("../../../../assets/icons/features1.png")}
                alt=""
                className={classes.feature_img}
              />

              <div className={classes.feature_text}>
                <h3>Shielded Sharing</h3>
                <p>
                  Create and Send SolidCodes directly from our platform.
                  Reducing your exposure to spam and online marketing.
                </p>
              </div>
            </div>

            <div className={classes.feature}>
              <img
                src={require("../../../../assets/icons/features2.png")}
                alt=""
                className={classes.feature_img}
              />

              <div className={classes.feature_text}>
                <h3>Share</h3>
                <p>
                  Share document and images (TXT, PDF, DOCX, PNG, JPG). Share
                  Messages (TXT). Share web links (URL). Create
                  password-protected SolidCodes.
                </p>
              </div>
            </div>

            <div className={classes.feature}>
              <img
                src={require("../../../../assets/icons/features3.png")}
                alt=""
                className={classes.feature_img}
              />

              <div className={classes.feature_text}>
                <h3>SolidFish API</h3>
                <p>
                  Embed and integrate into new and existing platforms. Coming
                  soon...
                </p>
              </div>
            </div>

            <div className={classes.feature}>
              <img
                src={require("../../../../assets/icons/features4.png")}
                alt=""
                className={classes.feature_img}
              />

              <div className={classes.feature_text}>
                <h3>SolidFish Blogs</h3>
                <p>
                  We have a lot to say about the effects of our digital
                  footprint on the earth and how you can help save the planet.
                  Feel free to hop on over to our blogs and check them out.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.features_concept}>
          <h1>Our Concept is Simple</h1>

          <img src={require("../../../../assets/concept.png")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Features;
