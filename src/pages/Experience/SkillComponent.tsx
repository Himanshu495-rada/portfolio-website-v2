import React from "react";
import styles from "./ExperiencePage.module.css";

interface SkillProps {
  title: string;
  skill: string;
  rating: number;
}

const SkillComponent: React.FC<SkillProps> = ({ title, skill, rating }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.row1}>
        <h4>{title}</h4>
        <div className={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index < rating ? styles.dotFilled : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className={styles.row1}>
        <p>{skill}</p>
      </div>
    </div>
  );
};

export default SkillComponent;
