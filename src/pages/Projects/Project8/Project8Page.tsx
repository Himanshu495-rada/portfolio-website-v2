import React from "react";
import styles from "../ProjectsPage.module.css";
import CodeBlock from "../CodeBlock";

const Project8Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1
          title="Secure User Authentication with Express, Node.js, and Prisma | JWT
          Token Login Tutorial"
        >
          Secure User Authentication with Express, Node.js, and Prisma | JWT
          Token Login Tutorial
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/DIWeHOHwqao?si=MaIZQfmbD8kMI9Yx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            In this step-by-step tutorial, we'll show you how to build a secure
            user authentication system using Express, Node.js, and Prisma. Learn
            how to create and verify JWT tokens for user login, protecting your
            application from unauthorized access. Whether you're a beginner or
            experienced developer, this blog will guide you through the process
            of implementing robust user authentication.
          </p>
          <h2 className="my-3">JWT authentication</h2>
          <p>
            JWT (JSON Web Token) authentication is a method of securely
            verifying the identity of users in web applications. It involves the
            issuance of digitally signed tokens that contain user information.
            These tokens are sent with each request, allowing the server to
            authenticate and authorize users, ensuring secure access to
            protected resources. JWT authentication is popular due to its
            efficiency, scalability, and ability to work well in distributed
            systems. It's a widely used solution for building secure, stateless
            authentication mechanisms in web applications.
          </p>
          <h2 className="my-3">Lets code</h2>
          <p style={{ marginTop: "20px" }}>
            First you need to create a simple node.js application for this type
            this command in your terminal
          </p>
          <CodeBlock code={`npm init`} code_type={""} />
          <p style={{ marginTop: "20px" }}>
            Now enter all the details about your application and complete the
            process.
          </p>
          <p>
            Now install following modules in our application:{" "}
            <b>bcrypt, dotenv, express, cors and jsonwebtoken</b>
          </p>
          <CodeBlock
            code={`npm i bcrypt dotenv express cors jsonwebtoken`}
            code_type={""}
          />
          <p style={{ marginTop: "20px" }}>
            After installing check all install modules in <b>Package.json</b>{" "}
            file.
          </p>
          <p>Now we need to initiate the prisma so enter this command</p>
          <CodeBlock code={`npx prisma init`} code_type={""} />
          <p style={{ marginTop: "20px" }}>
            Now you need to open the <b>/prisma/schema.prisma</b> and make
            changes in provider and create a Model for creating a table in
            database. Here we are using MySQL for database
          </p>
          <CodeBlock
            code={`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id Int @id @default(autoincrement())
  username String @unique
  password String
}`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>
            Please dont forget to change the <b>DATABASE_URL</b> from{" "}
            <b>.env</b> file
          </p>
          <CodeBlock
            code={`mysql://username:your_password@localhost:3306/your_database_name`}
            code_type={""}
          />
          <p style={{ marginTop: "20px" }}>
            Now we need to migrate the prisma to create our table in database,
            so enter this command
          </p>
          <CodeBlock
            code={`"npx prisma migrate dev --name init`}
            code_type={""}
          />
          <p style={{ marginTop: "20px" }}>
            Now import all required modules and setup our express application
            with cors and json
          </p>
          <CodeBlock
            code={`const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { PrismClient, PrismaClient } = require("@prisma/client");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>
            First of all we need to create signup endpoint, this endpoint will
            receive username and password from request and store that in our
            database table by encrypting the password
          </p>
          <CodeBlock
            code={`app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("Error hashing password: " + error);
    res.status(500).json({ message: "Registration failed" });
  }
});`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>
            Similarly create login endpoint, here we are generating jwt token on
            successful match of username and password so create a key in{" "}
            <b>.env</b> file for creating and verification of jwt token
          </p>
          <CodeBlock code={`JWT_KEY="yoursecretkey@2023"`} code_type={""} />
          <p style={{ marginTop: "20px" }}>Now create Login endpoint</p>
          <CodeBlock
            code={`app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign({ username }, process.env.JWT_KEY, {
        expiresIn: "10h",
      });
      const id = user.id;

      res.status(200).json({ token, id });
    } else {
      res.status(401).json({ message: "Wrong password" });
    }
  }
});`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>
            Now we need to create a authentication function, you can directly
            use same code in app endpoint also. But its good practice to keep
            all things organised. Here creating seperate function means creating
            a <b>Middleware</b> in our express application, thats why at the end
            of function we need to transfer the control from middleware to
            endpoint thats why we need to use <b>next()</b> function in our
            authenticationToken function.
          </p>
          <CodeBlock
            code={`function authenticateToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: Token missing" });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      console.error("JWT verification error: ", error);
      return res.status(403).json({ message: "Forbidden: Token invalid" });
    }
    req.user = user;
    next();
  });
}

app.get("/authenticate", authenticateToken, (req, res) => {
  res.json({ message: "Authenticated", user: req.user });
});`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>Also create the logout endpoint.</p>
          <CodeBlock
            code={`app.post("/logout", authenticateToken, (req, res) => {
  res.json({ message: "Logout successful" });
});`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>
            Finally we need to start our express application with port number,
            here we are using 3000 but you can use any port number you want but
            it should be greater that 2000
          </p>
          <CodeBlock
            code={`const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});`}
            code_type={"javascript"}
          />
          <p style={{ marginTop: "20px" }}>
            Now you can run our application using this command and connect with
            your frontend application also.
          </p>
          <CodeBlock code={`node index.js`} code_type={""} />
          <p style={{ marginTop: "20px" }}>
            I want to extend my heartfelt thanks to all the readers for taking
            the time to explore my blog. I hope you found the content
            informative and valuable. Your support and engagement mean the world
            to me. If you're interested in diving deeper into the topic and
            exploring the complete code of the application, I invite you to
            visit my GitHub repository. There, you'll find the full source code,
            resources, and additional materials to enhance your understanding.
            Your curiosity and interest are highly appreciated, and I look
            forward to sharing more knowledge with you in the future. Happy
            coding! 🚀
          </p>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/Authentication-Backend"
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

export default Project8Page;
