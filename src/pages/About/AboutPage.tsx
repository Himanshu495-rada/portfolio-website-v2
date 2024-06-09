import React from "react";
import styles from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.contentContainer}>
          <h1>About</h1>
          <p>
            Experienced Full Stack developer with Proficient in developing
            microservices-based applications within Agile project environments.
            Possessing nearly 2 years of hand-on experience, I have a proven
            track record of delivering high-quality software solutions that meet
            client requirements and deadlines. With strong problem-solving
            skills and collaborative mindset, I aspire to expand my knowledge
            base further, embracing new challenges that will push me to grow
            personally and professionally. <br />
            As a hobby I build stuff like electronics projects, software
            projects and youtube videos to educate people for free and implrove
            my skill-set
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
