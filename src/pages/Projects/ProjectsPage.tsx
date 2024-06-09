import React from "react";
import styles from "./ProjectsPage.module.css";
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
    {
      image: authenticationBackend,
      url: "/secure-user-authentication-with-express-nodejs-and-prisma",
    },
    {
      image: chatroom,
      url: "/how-to-make-chatroom-app-in-python",
    },
    {
      image: timelapseCamera,
      url: "/esp32-timelapse-camera",
    },
    {
      image: espCam,
      url: "/esp32-camera-module",
    },

    {
      image: qrscannerAndroid,
      url: "/how-to-make-qr-code-scanner-app-from-scratch",
    },
    {
      image: webviewAndroid,
      url: "/webview-in-android-studio",
    },
    {
      image: torretPython,
      url: "/how-to-download-torrent-using-python",
    },
    {
      image: telegramBot,
      url: "/how-to-create-telegram-bot-in-python",
    },

    {
      image: pythonBanner,
      url: "/secure-user-authentication-with-express-nodejs-and-prisma",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.card_grid}>
          {projects.map((project) => (
            <Card imageSrc={project.image} url={project.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
