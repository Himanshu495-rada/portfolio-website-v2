import React from "react";
import styles from "../ProjectsPage.module.css";
import { NavLink } from "react-router-dom";

const Project6Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="BUILD A TIME LAPSE CAMERA | ESP32 CAM Beginners tutorial">
          BUILD A TIME LAPSE CAMERA | ESP32 CAM Beginners tutorial
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/peTnIN9iicQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            We are building time lapse camera using esp32 cam module with the
            help of micropython which is a similar to the python. Which will
            make it more easier with less lines of code, all the code and
            recourses are provided below in download section.
          </p>
          <h2 className="my-3">ESP32 Camera module</h2>
          <NavLink to="/esp32-camera-module">Check out</NavLink>
          <h2 className="my-3">Micropython</h2>
          <p>
            MicroPython is a lean and efficient implementation of the Python 3
            programming language that includes a small subset of the Python
            standard library and is optimised to run on microcontrollers and in
            constrained environments.
          </p>
          <p>
            MicroPython is packed full of advanced features such as an
            interactive prompt, arbitrary precision integers, closures, list
            comprehension, generators, exception handling and more. Yet it is
            compact enough to fit and run within just 256k of code space and 16k
            of RAM.
          </p>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/esp32-camera-micropython"
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

export default Project6Page;
