import React from "react";
import styles from "./ProjectsPage.module.css";

interface CardProps {
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ imageSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt="Authentication Backend project" />
    </div>
  );
};

export default Card;
