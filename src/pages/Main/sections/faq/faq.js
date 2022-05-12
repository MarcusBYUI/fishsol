import React, { useState } from "react";

//Styles
import classes from "./faq.module.scss";

//TestData
const STATIC_QUESTIOSN = [
  {
    question: "How are we destroying the environment?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "Why Bother about it all?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "What is a SolidCode?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "What is the Green Internet Revolution?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "Who is the intended audience of this platform?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "Can I share videos on the SolidFish platform?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "Can I share any file type on the SolidFish platform?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "I cannot share very large files, why?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "Can I report issues I found using SolidFish?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "How can we guard against spoofed weblinks?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
  {
    question: "Why is the SolidFish app not free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum cumque saepe placeat vero doloremque, similique repellendus fugiat nihil! Praesentium!",
  },
];

const Faq = () => {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const openQuestion = (index) => [setOpenedQuestion(index)];

  return (
    <section className={classes.wrapper}>
      <img
        src={require("../../../../assets/faq_line.png")}
        alt=""
        className={classes.faq_line}
      />
      <img
        src={require("../../../../assets/faq_smudge.png")}
        alt=""
        className={classes.faq_smudge}
      />
      <div className={classes.faq}>
        <h2>FAQ</h2>

        <div className={classes.faq_questions}>
          {STATIC_QUESTIOSN.map((item, index) => (
            <div
              key={index}
              className={classes.question}
              onClick={openQuestion.bind(this, index)}
            >
              <div className={classes.question_heading}>
                <p>{item.question}</p>
                <img
                  src={require("../../../../assets/icons/down.png")}
                  alt="Open Question"
                  className={classes.question_heading_icon}
                />
              </div>

              {openedQuestion === index && (
                <div className={classes.question_body}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
