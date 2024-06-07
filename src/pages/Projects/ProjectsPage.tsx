import React from "react";
import styles from "./ProjectsPage.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import Card from "./Card";
import authenticationBackend from "../../assets/authentication-backend.png";
import chatroom from "../../assets/Chatroom.png";
import espCam from "../../assets/esp-cam.png";
import pythonBanner from "../../assets/python_banner.png";
import qrscannerAndroid from "../../assets/qrscanner-android.png";
import telegramBot from "../../assets/telegram_bot.png";
import timelapseCamera from "../../assets/timelapse-camera.png";
import torretPython from "../../assets/torrent-python.png";
import webviewAndroid from "../../assets/webview-android.png";

const ProjectsPage: React.FC = () => {
  const projects = [
    authenticationBackend,
    espCam,
    pythonBanner,
    qrscannerAndroid,
    telegramBot,
    timelapseCamera,
    torretPython,
    webviewAndroid,
  ];

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.card_grid}>
          {projects.map((project) => (
            <Card imageSrc={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
