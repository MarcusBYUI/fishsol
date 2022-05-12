import React from "react";

//Componets
import Header from "../../components/header/header";

//Styles
import classes from "./blog.module.scss";
import Footer from "../../pages/Main/sections/footer/footer";

const BlogPage = () => {
  return (
    <section className={classes.wrapper}>
      <Header />

      <div className={classes.hero}>
        <div className={classes.hero_main}>
          <img src="http://placehold.jp/650x550.png" alt="" />

          <div className={classes.hero_main_text}>
            <h3>TRENDING TOPIC</h3>
            <h1>Sustainability in the digital world</h1>
            <p>7 hours ago</p>
          </div>
        </div>
      </div>

      <div className={classes.hero_row}>
        <div className={classes.hero_row_item}>
          <img src="http://placehold.jp/550x550.png" alt="" />
          <h3>tag name</h3>
        </div>

        <div className={classes.hero_row_item}>
          <img src="http://placehold.jp/550x550.png" alt="" />
          <h3>tag name</h3>
        </div>

        <div className={classes.hero_row_item}>
          <img src="http://placehold.jp/550x550.png" alt="" />
          <h3>tag name</h3>
        </div>

        <div className={classes.hero_row_item}>
          <img src="http://placehold.jp/550x550.png" alt="" />
          <h3>tag name</h3>
        </div>
      </div>

      <div className={classes.latest}>
        <h2>Latest from the blog</h2>

        <div className={classes.latest_grid}>
          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>

          <div className={classes.card}>
            <img src="http://placehold.jp/550x350.png" alt="" />
            <div className={classes.card_text}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel nibh id nec liquet euismod ac.
              </p>

              <p>View More</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BlogPage;
