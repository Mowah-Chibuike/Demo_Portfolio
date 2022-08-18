import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className={classes.name_container}>
        <h3 className={classes.name}>Mowah Chibuike</h3>
      </div>
      <div className={classes.socials}>
        <FontAwesomeIcon className={classes.socialIcon} icon={faFacebookF} />
        <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} />
        <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} />
      </div>
      <p>Copyright © 2022 | All rights reserved</p>
    </footer>
  );
};

export default Footer;
