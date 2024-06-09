import React from "react";
import styles from "../ProjectsPage.module.css";

const Project5Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="ESP32 CAM Beginners Tutorial | Face Detection | Getting Started">
          ESP32 CAM Beginners Tutorial | Face Detection | Getting Started
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/iwa6q-ppHDY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            This tutorial will help you to understand how to use ESP32 camera
            module. This module is really powerful which can be used to create
            different servelience applications. We'll show you how to setup a
            video streaming web server with face recognition and detection in
            less than 5 minutes with Arduino IDE.
          </p>
          <h2 className="my-3">ESP32 Camera module</h2>
          <p>
            ESP32-CAM is a low cost camera module with OV2640 camera sensor. It
            is a complete development board with ESP32-S chip, flash, camera and
            antenna. It is a powerful, generic WiFi-BT-BLE MCU module that
            targets a wide variety of applications, ranging from low-power
            sensor networks to the most demanding tasks, such as voice encoding,
            music streaming and MP3 decoding.
          </p>
          <h5>Pinout</h5>
          <img
            src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/03/ESP32-CAM-pinout-1.png?quality=100&strip=all&ssl=1"
            alt="ESP32-CAM Pinout"
            className="img-fluid mx-auto d-block"
          />
          <h2 className="my-3">Circuit diagram</h2>
          <img
            src="https://raw.githubusercontent.com/Himanshu495-rada/esp-camera-app/main/Connection.png"
            alt="ESP32-CAM Pinout"
            className="img-fluid mx-auto d-block"
          />
          <h2 className="my-3">Hardware Requirements</h2>
          <ul>
            <li>ESP32-CAM</li>
            <li>USB TTL module</li>
            <li>PC</li>
          </ul>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/esp-camera-app/blob/main/WifiCam.ino"
            target="_blank"
            className={styles.downloadBtn}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project5Page;
