import React from "react";

import classes from "./mobile.module.scss";

const Mobile = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.mobile}>
        <img
          src={require("../../../../assets/mobile_dots.png")}
          alt=""
          className={classes.mobile_dots}
        />

        <img
          src={require("../../../../assets/mobile_section.png")}
          alt=""
          className={classes.mobile_bg}
        />
        <img
          src={require("../../../../assets/logo.png")}
          alt=""
          className={classes.mobile_logo}
        />
        <img
          src={require("../../../../assets/phone.png")}
          alt=""
          className={classes.mobile_phone}
        />
        <div className={classes.mobile_info}>
          <h1>Get The App</h1>

          <div className={classes.mobile_actions}>
            <img
              src={require("../../../../assets/get_ios.png")}
              alt=""
              className={classes.mobile_actions_btn}
            />

            <img
              src={require("../../../../assets/get_ios.png")}
              alt=""
              className={classes.mobile_actions_btn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
