import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import profilePhoto from "../../assets/photo.jpg";
import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.homeContainer}>
        <div className={styles.profile_photo}>
          <img src={profilePhoto} alt="profile photo" />
        </div>

        <div className={styles.profileData}>
          <h1 className="name">Himanshu Tekade</h1>
          <h2 className="role">Full Stack Developer</h2>
          <div className={styles.btnContainer}>
            <NavLink to={"/"} title="Resume" className={styles.btn}>
              Resume
            </NavLink>
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
