import CustomButton from "../../../../components/customButton/customButton";
import CustomCheckbox from "../../../../components/customCheckbox/customCheckbox";
import React from "react";

//Styles
import classes from "./quiz.module.scss";

/**const FirstTab = () => {
  return (
    <div className={classes.quiz_tab}>
      <h1>Help improve our platform by taking a 5-minute survey</h1>
      <CustomButton warning>
        <p> START</p>
      </CustomButton>
    </div>
  );
};*/

const Quiz = () => {
  return (
    <section className={classes.quiz}>
      <div className={classes.quiz_tab}>
        <div className={classes.quiz_tab_heading}>
          <button>Exit Survey</button>
        </div>
        <div className={classes.quiz_tab_main}>
          <h2>Insert question. Select all that apply.</h2>
          <div className={classes.quiz_tab_body}>
            <CustomCheckbox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CustomCheckbox>
            <CustomCheckbox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CustomCheckbox>
            <CustomCheckbox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CustomCheckbox>
            <CustomCheckbox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CustomCheckbox>
          </div>

          <div className={classes.quiz_tab_actions}>
            <CustomButton warning>
              <p>Back</p>
            </CustomButton>
            <CustomButton warning>
              <p>Next</p>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
