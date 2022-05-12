import VideoTutorial from "../../components/videoTutorial/videoTutorial";
import React, { useState, useEffect } from "react";

//Components
import Nav from "../../components/dashboard/nav/nav";
import NotificationBar from "../../components/dashboard/notificationBar/notificationBar";
import SearchBar from "../../components/dashboard/SearchBar/searchBar";
import UploadButton from "../../components/dashboard/uploadButton/uploadButton";
import UploadModal from "../../components/dashboard/uploadModal/uploadModal";
import LoadingOverlay from "../../components/loadingOverlay/loadingOverlay";

//Styles
import classes from "./dashboard.module.scss";

const Dashboard = () => {
  const [uploadOpt, setUploadOpt] = useState(false);
  const [notification] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [videoActive, setVideoActive] = useState(false);

  const setUpload = (type) => {
    setUploadOpt(type);
  };

  const toggleVideoTutorial = () => {
    setVideoActive((prevState) => !prevState);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section className={classes.app}>
      {isLoading && <LoadingOverlay />}
      {videoActive && <VideoTutorial onToggle={toggleVideoTutorial} />}
      <div className={classes.header}>
        <img
          src={require("../../assets/logo.png")}
          alt="Logo"
          className={classes.logo}
        />

        <UploadButton setUpload={setUpload} />

        <div className={classes.content}>
          {uploadOpt ? (
            <UploadModal
              type={uploadOpt}
              onCloseModal={setUpload.bind(this, false)}
            />
          ) : (
            <SearchBar />
          )}
        </div>

        <Nav onVideo={toggleVideoTutorial} />
        <NotificationBar isHidden={notification} />
      </div>
    </section>
  );
};

export default Dashboard;
