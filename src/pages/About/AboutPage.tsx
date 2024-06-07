import React from "react";
import styles from "./AboutPage.module.css";
import NavBar from "../../Components/NavBar/NavBar";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.aboutContainer}>
        <div className={styles.contentContainer}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit laudantium culpa quibusdam labore placeat reiciendis
            est nam. Beatae dolore reprehenderit cupiditate amet quis esse
            asperiores laboriosam cumque iste? Eligendi reprehenderit officiis
            sequi dolorum quaerat esse nobis dolore impedit facilis? Non eum et
            labore reiciendis quis veritatis dicta autem optio suscipit odio
            aperiam, ullam adipisci quisquam nobis qui soluta. Vitae aperiam
            eligendi impedit eveniet tenetur quis porro doloremque culpa,
            debitis accusamus aliquam, sit soluta dolorem quas aliquid? Et sed,
            molestiae dolore nostrum voluptates, error fugiat molestias
            consectetur, repudiandae corrupti itaque voluptatibus rerum nesciunt
            enim facilis quisquam incidunt assumenda nemo repellendus. Totam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
