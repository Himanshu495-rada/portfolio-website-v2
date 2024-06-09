import React from "react";
import styles from "../ProjectsPage.module.css";
import { NavLink } from "react-router-dom";

const Project3Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="WebView in Android Studio | Quick Tutorial">
          WebView in Android Studio | Quick Tutorial
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/FoUUIBANmng"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            In this quick tutorial we are going to learn how to use WebView in
            android studio, and also we have updated one feature in my QR code
            scanner app tutorial please{" "}
            <NavLink to="/project4">Check here</NavLink>.
          </p>
          <h2 className="my-3">WebView</h2>
          <p>
            WebView is a view that display web pages inside your application.
            You can also specify HTML string and can show it inside your
            application using WebView. WebView makes turns your application to a
            web application. In order to add WebView to your application, you
            have to add &#60;WebView&#62; element to your xml layout file.
          </p>
          <h2 className="my-3">Requirements</h2>
          <ul>
            <li>Android Studio</li>
            <li>Android SDK</li>
            <li>Android Device or Emulator</li>
          </ul>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/QRCodeScanner_App/tree/master"
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

export default Project3Page;
