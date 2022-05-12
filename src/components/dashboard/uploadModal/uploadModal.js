import React, { useState } from "react";

//Modal Variations
import UploadFile from "./variations/uploadFile/uploadFile";
import UploadLink from "./variations/uploadLink/uploadLink";
import UploadNote from "./variations/uploadNote/uploadNote";
import SaveCode from "./variations/saveCode/saveCode";
import ConfigureCode from "./variations/configureCode/configureCode";
import ManageExpiration from "./variations/manageExpiration/manageExpiration";

//Styles
import classes from "./uploadModal.module.scss";
import CodeSent from "./variations/codeSent/codeSent";

const TABS = [
  { placeholder: "Upload Files", component: <UploadLink /> },
  { placeholder: "Save your solidcode", component: <SaveCode /> },
  { placeholder: "Configure your solidcode", component: <ConfigureCode /> },
  { placeholder: "Manage code expiration", component: <ManageExpiration /> },
];

const UPLOAD_OPTIONS = { file: "FILE", text: "TEXT", link: "LINK" };

const UploadModal = ({ type, onCloseModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const onNextTab = () => {
    if (activeTab + 1 === TABS.length) {
      setIsSubmited(true);
      return;
    }
    setActiveTab((prevTab) => prevTab + 1);
  };

  const toggleSideNav = () => {
    setIsActive((prevState) => !prevState);
  };

  const onPrevTab = () => {
    if (activeTab === 0) {
      return;
    }
    setActiveTab((prevTab) => prevTab - 1);
  };

  //Link Text
  let firstLink = null;
  let centerContent = null;

  switch (type) {
    case UPLOAD_OPTIONS.file:
      firstLink = "Upload files";
      centerContent = <UploadFile />;
      break;

    case UPLOAD_OPTIONS.link:
      firstLink = "Enter URL links";
      centerContent = <UploadLink />;
      break;

    case UPLOAD_OPTIONS.text:
      firstLink = "Enter your note";
      centerContent = <UploadNote />;
      break;

    default:
      firstLink = null;
      centerContent = null;
      break;
  }

  return (
    <div className={classes.modal}>
      {isActive && (
        <div onClick={toggleSideNav} className={classes.sidebar_backdrop}></div>
      )}

      {isSubmited && <CodeSent onModalClose={onCloseModal} />}
      {!isSubmited && (
        <div
          className={`${classes.sidebar} ${isActive && classes.sidebar_active}`}
        >
          <ul className={classes.sidebar_tabs}>
            {TABS.map((tab, index) => (
              <li
                key={index}
                className={`${classes.sidebar_tabs_item} ${
                  index === activeTab && classes.active
                }`}
              >
                {index + 1}. {index === 0 ? firstLink : tab.placeholder}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isSubmited && (
        <div className={classes.content}>
          <div className={classes.content_heading}>
            <div onClick={toggleSideNav} className={classes.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img
              onClick={onCloseModal}
              src={require("../../../assets/icons/exit.svg").default}
              alt="Close"
              className={classes.content_heading_icon}
            />
          </div>
          {activeTab === 0 ? centerContent : TABS[activeTab].component}

          <div className={classes.content_actions}>
            <div className={classes.content_actions_left} onClick={onPrevTab}>
              <img src={require("../../../assets/icons/back.png")} alt="" />
              <p>Back</p>
            </div>
            <div className={classes.content_actions_right} onClick={onNextTab}>
              <img src={require("../../../assets/icons/next.png")} alt="" />
              <p>Next</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadModal;
