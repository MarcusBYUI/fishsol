import React from "react";

import classes from "./tips.module.scss";

const Tips = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.tips}>
        <img
          src={require("../../../../assets/tips_shape.png")}
          alt="tips"
          className={classes.tips_shape}
        />

        <img
          src={require("../../../../assets/tips_circle.png")}
          alt="tips"
          className={classes.tips_circle}
        />
        <h1 className={classes.tips_heading}>Tips</h1>
        <div className={classes.tips_body}>
          <img
            src={require("../../../../assets/icons/tips_left.svg").default}
            alt=""
            className={classes.tips_body_icon}
          />

          <div className={classes.tip}>
            <div className={classes.tip_info}>
              <p>
                TIP: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris vel nibh id nec aliquet euismod ac.
              </p>
              <p>#hashtag #hashtag</p>
            </div>

            <img
              src={require("../../../../assets/icons/share.svg").default}
              alt=""
              className={classes.tip_icon}
            />
          </div>

          <img
            src={require("../../../../assets/icons/tips_right.svg").default}
            alt=""
            className={classes.tips_body_icon}
          />
        </div>
      </div>
    </section>
  );
};

export default Tips;
