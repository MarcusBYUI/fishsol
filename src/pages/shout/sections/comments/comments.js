import React from "react";

//Styles
import classes from "./comments.module.scss";

const Comments = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.comments}>
        <img
          src={require("../../../../assets/comments_smudge.png")}
          alt=""
          className={classes.comments_smudge}
        />
        <h2>LATEST COMMENTS</h2>
        <div className={classes.comments_list}>
          <div className={classes.comment}>
            <div className={classes.comment_heading}>
              <img src="" alt="Profile" />
              <div className={classes.comment_heading_info}>
                <p>Name</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              reiciendis harum odio, veritatis quos quasi architecto inventore
              laborum id tempora?
            </p>
          </div>

          <div className={classes.comment}>
            <div className={classes.comment_heading}>
              <img src="" alt="Profile" />
              <div className={classes.comment_heading_info}>
                <p>Name</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              reiciendis harum odio, veritatis quos quasi architecto inventore
              laborum id tempora?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
