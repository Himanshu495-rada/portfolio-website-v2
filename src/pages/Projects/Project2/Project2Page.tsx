import React from "react";
import styles from "../ProjectsPage.module.css";

const Project2Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectPageContainer}>
        <h1 title="How to download torrent using python| Python Projects Examples | Python Tutorial | python libtorrent">
          How to download torrent using python| Python Projects Examples |
          Python Tutorial | python libtorrent
        </h1>
        <iframe
          width="80%"
          height="350"
          src="https://www.youtube.com/embed/V9CO2vyRkb8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <p>
            In this video we are going to download Torrent file using python. We
            require python3-libtorrent module which is only available for Linux
            operating systems. You can download movies using python without any
            VPN connection.
          </p>
          <h2 className="my-3">Torrent</h2>
          <p>
            Torrents are a method of distributing files over the internet. They
            operate over the BitTorrent protocol to facilitate what's called
            peer-to-peer (P2P) file-sharing.
          </p>
          <p>
            There are a number of benefits torrent-based file sharing has over
            traditional file sharing. Expensive server equipment isn't necessary
            to send files to many people at once, and low-bandwidth (slow)
            networks can just as easily download large sets of data.
          </p>
          <p>
            The most common way to use torrents is through a special file that
            uses the .TORRENT file extension. Within the file are directions for
            how to share specific data with other people.
          </p>
          <h2 className="my-3">Libtorrent</h2>
          <p>
            libtorrent is a feature complete C++ bittorrent implementation
            focusing on efficiency and scalability. It runs on embedded devices
            as well as desktops. It boasts a well documented library interface
            that is easy to use. It comes with a simple bittorrent client
            demonstrating the use of the library.
          </p>
          <h5>The main goals of libtorrent are:</h5>
          <ul>
            <li>to be CPU efficient</li>
            <li>to be memory efficient</li>
            <li>to be very easy to use</li>
          </ul>
          <h2 className="my-3">Requirements</h2>
          <ul>
            <li>Python 3.7 or above</li>
            <li>Torrent client library = python3-libtorrent</li>
            <li>Linux Operating System</li>
          </ul>
          <h2 className="my-3">Download Source Code</h2>
          <a
            href="https://github.com/Himanshu495-rada/Torrent_python"
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

export default Project2Page;
