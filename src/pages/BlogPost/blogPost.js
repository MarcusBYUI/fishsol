import React from "react";

//Components
import Header from "../../components/header/header";
import Footer from "../../pages/Main/sections/footer/footer";

//Styles
import classes from "./blogPost.module.scss";

const BlogPost = () => {
  return (
    <section className={classes.wrapper}>
      <Header />
      <div className={classes.content}>
        <p>Blog / Sustainability / Sustainability in the digital world</p>

        <img
          src="http://placehold.jp/650x550.png"
          alt=""
          className={classes.content_img}
        />

        <div className={classes.content_text}>
          <div className={classes.content_text_main}>
            <h2>Sustainability in the digital world</h2>
            <p>Feburary 10, 2021 by SolidFish Team</p>
            <p>
              When you are trying to live more sustainably, one key thing to
              consider is the carbon footprint of everything you buy, use and
              do. But trying to work out how much carbon is emitted in your name
              can be a minefield. And there are several things most people do
              not consider. One key area that individuals often forget when
              thinking about carbon emissions is their digital footprint.
            </p>

            <p>
              You might not realise it, but each email you send, internet search
              you undertake, upload or download comes at a cost. Each time you
              do something online or in the digital world will result in a small
              amount of real-world carbon emissions. Of course, it takes energy
              to run your devices and to power the wireless networks you access.
              But a lot more energy is required to power the data centres and
              vast servers that keep the Internet running, and store content.
            </p>

            <p>
              Each individual digital action only requires a small amount of
              energy which equates to a small amount of emissions. But those
              individual actions add up. It is necessary to think beyond the
              obvious and consider hidden, or often overlooked sources of carbon
              emissions.
            </p>
            <p>
              Around 4.66 billion people, over half the global population, are
              now online[1] and all that online activity accounts for 3.7% of
              global greenhouse emissions[2]. This means that our digital
              activity contributes relatively significantly to our climate
              crisis. And things will only get worse. Emissions from digital
              actions are predicted to double by 2025[3].
            </p>

            <p>
              The developed nations of the world are the largest contributors to
              the global digital footprint. Importantly, those of us lucky
              enough to have good online access should do what we can to reduce
              the impacts of our activities – not just in the real world of our
              everyday lives, but in the digital realm too.
            </p>
          </div>

          <div className={classes.content_text_side}>
            <div className={classes.tags}>
              <h2>Tags</h2>

              <ul className={classes.tags_list}>
                <li>tag1</li>
                <li>tag1</li>
                <li>tag1</li>
                <li>tag1</li>
              </ul>
            </div>

            <div className={classes.social}>
              <h2>Share</h2>
              <div className={classes.social_links}>
                <div className={classes.social_links_item}>
                  <img
                    src={require("../../assets/icons/twitter.svg").default}
                    alt=""
                  />
                  <p>Twitter</p>
                </div>

                <div className={classes.social_links_item}>
                  <img
                    src={require("../../assets/icons/twitter.svg").default}
                    alt=""
                  />
                  <p>Twitter</p>
                </div>

                <div className={classes.social_links_item}>
                  <img
                    src={require("../../assets/icons/twitter.svg").default}
                    alt=""
                  />
                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.blogs}>
          <h2>What to Read Next</h2>

          <div className={classes.blogs_row}>
            <div className={classes.card}>
              <img src="http://placehold.jp/550x350.png" alt="" />
              <div className={classes.card_text}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel nibh id nec liquet euismod ac.
                </p>

                <p>View More</p>
              </div>
            </div>
            <div className={classes.card}>
              <img src="http://placehold.jp/550x350.png" alt="" />
              <div className={classes.card_text}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel nibh id nec liquet euismod ac.
                </p>

                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BlogPost;
