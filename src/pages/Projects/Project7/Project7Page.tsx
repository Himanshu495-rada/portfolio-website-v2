import React from "react";
import styles from "../ProjectsPage.module.css";

const Project7Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="How to make Chatroom App in Python | Python Chatroom">
          How to make Chatroom App in Python | Python Chatroom
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/qBoyXxvwo4M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            In this video, we'll build a simple chatroom using Python. Chatrooms
            are a popular way for people to communicate with each other online
            in real-time, and they can be used for a variety of purposes, from
            socializing with friends to collaborating on projects with
            colleagues. We'll start by setting up a basic server using Python's
            built-in socket library, which allows us to establish a network
            connection between multiple clients. Then, we'll create a
            client-side application that can connect to the server and send
            messages to other users in the chatroom. We'll explore various
            programming concepts along the way, such as sockets, threads, and
            data serialization. We'll also demonstrate how to handle multiple
            clients simultaneously and how to gracefully handle errors and
            exceptions. By the end of the video, you'll have a fully functional
            chatroom application that you can use as a starting point for your
            own projects. Whether you're interested in building chatrooms for
            fun or for work, this video will give you a solid foundation to
            build upon. So, let's get started and create a chatroom in Python!
          </p>
          <h2 className="my-3">Socket Programming</h2>
          <p>
            A socket is a communications connection point (endpoint) that you
            can name and address in a network. Socket programming shows how to
            use socket APIs to establish communication links between remote and
            local processes.
          </p>
          <h2 className="my-3">MultiThreading</h2>
          <p>
            Multithreading is the ability of a program or an operating system to
            enable more than one user at a time without requiring multiple
            copies of the program running on the computer. Multithreading can
            also handle multiple requests from the same user.
          </p>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/multiclient_chatroom"
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

export default Project7Page;
