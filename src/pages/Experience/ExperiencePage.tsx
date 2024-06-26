import React, { useState, useEffect } from "react";
import styles from "./ExperiencePage.module.css";
import SkillComponent from "./SkillComponent";

const ExperiencePage: React.FC = () => {
  const [experience, setExperience] = useState("");

  const JOINING_DATE = new Date("2022-07-01T00:00:00Z");

  const skills = [
    {
      title: "Full Stack Development",
      skill:
        "Spring boot, Java, Microservices, Hibernate, Spring Data JPA, Selenium, Junit, TestNG",
      ratings: 5,
    },
    {
      title: "Frontend Development",
      skill: "React TS JS, HTML CSS",
      ratings: 4,
    },
    {
      title: "Backend Development",
      skill: "Express JS, Python Flask",
      ratings: 4,
    },
    {
      title: "Developement",
      skill:
        "SDLC, STLC, Agile, Scaled Agile Framework (SAFe), SCRUM, Jira, Confluence",
      ratings: 3,
    },
    {
      title: "Programming",
      skill: "Python, Javascript, Typescript, Java",
      ratings: 4,
    },
    {
      title: "Database",
      skill: "MySQL, PostgreSQL, MongoDB",
      ratings: 3,
    },
    {
      title: "Video Editing",
      skill:
        "Adobe Premiere Pro, Adobe Photoshop, Adobe After Effects, Adobe XD",
      ratings: 2,
    },
    {
      title: "Cloud",
      skill: "AWS, Linux server, Windows IIS server",
      ratings: 3,
    },
  ];

  useEffect(() => {
    const updateExperience = () => {
      const now = new Date();
      const diffMs = now.getTime() - JOINING_DATE.getTime(); // Calculate time difference in milliseconds

      const diffDate = new Date(diffMs);
      const years = diffDate.getUTCFullYear() - 1970; // Years since Unix epoch (1970)
      const months = diffDate.getUTCMonth();

      setExperience(
        `${years} year${years > 1 ? "s" : ""} ${months} month${
          months > 1 ? "s" : ""
        }`
      );
    };

    updateExperience(); // Initial calculation
    const intervalId = setInterval(updateExperience, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.experienceContainer}>
        <h1>Work Experience</h1>
        <div className={styles.columnContainer}>
          <div className={styles.column1}>
            <h4>Total Experience</h4>
            <hr />
            <p>{experience}</p>
            <h4>Time</h4>
            <hr />
            <p>2022/07 - present</p>
            <h4>Location</h4>
            <hr />
            <p>Pune, India</p>
            <h4>Profile</h4>
            <hr />
            <p>Full Stack Developer</p>
            <h4>Stack</h4>
            <hr />
            <p>
              SpringBoot Java, React JS, Typescript, JUnit, TestNG, Selenium
            </p>
            <h4>Project</h4>
            <hr />
            <p>Sustainable Future</p>
            <h4>Role</h4>
            <hr />
            <ul>
              <li>
                Collaborate effectively within cross-functional teams using
                Agile methodologies (SAFe) to deliver software iteratively and
                incrementally.
              </li>
              <li>
                Built scalable, data intensive microservice application using
                Java, Spring boot that collects data from different
                microservices and perform calculations to check the
                sustainability of product, where user can see the result on
                dashboard or export to excel sheet.
              </li>
              <li>
                Translate client requirements into technical solutions,
                exceeding expectations.
              </li>
              <li>
                Design, develop, and maintain robust backend APIs using Spring
                Boot.
              </li>
              <li>
                Implement business logic and data access layers with modularity
                and reusability
              </li>
              <li>
                Handle client-side data interactions with frontend in React
              </li>
              <li>
                Unit and integration testing using JUnit, TestNG, Selenium
              </li>
              <li>
                Developed and deployed a backend update, resulting in 30%
                reduction in bugs and defects and improving application
                performance by 25%
              </li>
              <li>Improved website design for better UI interaction</li>
            </ul>
          </div>
          <div className={styles.column2}>
            <h4>Skills</h4>
            <hr />
            {skills.map((skill, index) => (
              <SkillComponent
                key={index}
                title={skill.title}
                skill={skill.skill}
                rating={skill.ratings}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
