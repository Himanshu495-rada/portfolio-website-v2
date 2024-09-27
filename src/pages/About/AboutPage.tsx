import React from "react";
import styles from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.contentContainer}>
          <h1>About</h1>
          <p>
            I am an experienced Full Stack Developer with over 2 years of
            hands-on expertise in developing microservices-based applications
            within Agile environments. My journey has been marked by a
            consistent track record of delivering robust, scalable software
            solutions that align with client expectations and project deadlines.{" "}
            <br />
            Driven by a passion for problem-solving and collaboration, I thrive
            in dynamic team settings and constantly seek opportunities to expand
            my technical knowledge. Beyond my professional work, I engage in
            personal projects, building innovative electronics and software
            solutions. I also create educational content on YouTube, sharing
            insights and helping others while honing my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
