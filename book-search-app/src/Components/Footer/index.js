import React from "react";
import styles from "./Footer.module.css";
import GithubSvg from "../../Assets/github.svg";
import LinkedinSvg from "../../Assets/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterName}>
        <span className={styles.Createdby}>Created by : </span> Mert Aytuğ Gök
      </div>
      <div className={styles.FooterLogo}>
        <span>
          <a
            className={styles.github}
            target="_blank"
            href="https://github.com/mertaytuggok"
            rel="noreferrer"
          >
            <img
              className={styles.githubLogo}
              src={GithubSvg}
              alt="Github Logo"
              width={48}
              height={48}
              color="#fffff"
            />
            <span>@mertaytuggok</span>
          </a>{" "}
        </span>
        <span>
          <a
            className={styles.github}
            target="_blank"
            href="https://www.linkedin.com/in/mertaytuggok/"
            rel="noreferrer"
          >
            <img
              src={LinkedinSvg}
              alt="Linkedin Logo"
              width={48}
              height={48}
              color="#fffff"
            />
            <span>@mertaytuggok</span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
