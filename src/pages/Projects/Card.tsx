import React from "react";
import styles from "./ProjectsPage.module.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  imageSrc: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, url }) => {
  const nav = useNavigate();

  return (
    <div className={styles.card} onClick={() => nav(url)}>
      <img src={imageSrc} alt="Project Banner" />
    </div>
  );
};

export default Card;
