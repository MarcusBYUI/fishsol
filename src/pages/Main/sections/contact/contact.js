import React from "react";

//Components
import CustomButton from "../../../../components/customButton/customButton";
import CustomInput from "../../../../components/customInput/customInput";

//Styles
import classes from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.contact}>
        <div className={classes.contact_img}>
          <img src={require("../../../../assets/contact.png")} alt="Contact" />
        </div>
        <div className={classes.contact_form}>
          <h2>Have a question? Drop us a line</h2>
          <div className={classes.form}>
            <div className={classes.row}>
              <CustomInput placeholder="Name" />
              <CustomInput placeholder="Phone" />
            </div>

            <CustomInput placeholder="Email Address" />

            <CustomInput placeholder="Message" />

            <CustomButton warning>Submit</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
