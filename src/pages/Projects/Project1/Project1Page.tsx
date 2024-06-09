import React from "react";
import styles from "../ProjectsPage.module.css";

const Project1Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="How to create Telegram Bot in Python ? | Telegram Bot in Python.">
          How to create Telegram Bot in Python ? | Telegram Bot in Python.
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/H58P2gntbNw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            In this quick tutorial we are going to learn how to make telegram
            bot python programming to automate our daily tasks. Also known as
            OCR bot. All explaination is provided in video please check out
            above video for better understanding.
          </p>

          <h2 className="my-3">What is Telegram Bot ?</h2>
          <p>
            Telegram bots are small programs that can embed in Telegram chats or
            public channels and perform a specific function. They can offer
            customized keyboards, produce cat memes on demand, or even accept
            payments and act as a digital storefront. Bots are popular on
            Telegram, because they're fun and convenient, and Telegram has
            supported them since 2015. They are essentially automated Telegram
            accounts; you can just add them to chats and channels as you would a
            friend. But while researching the bot platform, Forcepoint realized
            that the feature doesn't incorporate the encryption algorithm
            Telegram uses to protect its chats. As a result, adding a bot to a
            chat or channel undermines its security, potentially making it
            easier for a third party to intercept messages.
          </p>

          <h2 className="my-3">Requirements</h2>
          <ul>
            <li>Telegram Account</li>
            <li>Python 3.7 or above</li>
            <li>Python Libraries</li>
            <li>Telegram Bot Token</li>
          </ul>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/Telegtam-OCR-Bot"
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

export default Project1Page;
