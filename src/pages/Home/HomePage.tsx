import React from "react";
import profilePhoto from "../../assets/photo.jpg";
import resumePDF from "../../assets/Himanshu-Yashwant-Tekade-Resume.pdf";
import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <div className={styles.profile_photo}>
          <img src={profilePhoto} alt="profile photo" />
        </div>

        <div className={styles.profileData}>
          <h1 className="name">Himanshu Tekade</h1>
          <h2 className="role">Full Stack Developer</h2>
          <div className={styles.btnContainer}>
            <a
              href={resumePDF}
              target="_blank"
              title="Resume"
              className={styles.btn}
            >
              Resume
            </a>
            <NavLink to={"/contact"} title="Contact" className={styles.btn}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
