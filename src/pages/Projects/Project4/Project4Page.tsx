import React from "react";
import styles from "../ProjectsPage.module.css";

const Project4Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="How to make QR Code Scanner App From Scratch | Android Studio Projects Tutorial for Beginners.">
          How to make QR Code Scanner App From Scratch | Android Studio Projects
          Tutorial for Beginners.
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/RxUyEtXQySA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            QR Code Scanner Android app that we are going to build in this
            tutorial takes QR code as input from the user and generates the
            output which is displayed in Text View in the Screen. We are going
            to create An android app that has the ability to scan the QR code
            available. The One Android Library is used in this application
            building process and you need to use it in our app that we are going
            to build.
          </p>
          <h2 className="my-3">QR Code</h2>
          <p>
            A QR code (an initialism for quick response code) is a type of
            matrix barcode (or two-dimensional barcode) invented in 1994 by the
            Japanese company Denso Wave. A barcode is a machine-readable optical
            label that can contain information about the item to which it is
            attached. In practice, QR codes often contain data for a locator,
            identifier, or tracker that points to a website or application. QR
            codes use four standardized encoding modes (numeric, alphanumeric,
            byte/binary, and kanji) to store data efficiently; extensions may
            also be used
          </p>
          <h2 className="my-3">Requirements</h2>
          <ul>
            <li>Android Studio</li>
            <li>Android SDK</li>
            <li>Dependency = com.budiyev.android:code-scanner:2.1.0</li>
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

export default Project4Page;
