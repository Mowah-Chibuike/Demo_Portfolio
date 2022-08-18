import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={classes.contact_info}>
      <h2 className={classes.title}>Get In Touch</h2>
      <p>It only takes a minute to send a direact message!</p>
      <div className={classes.media}>
        <FontAwesomeIcon className={classes.icon} icon={faPhone} />
        <p>+234 811 154 6777</p>
      </div>
      <div className={classes.media}>
        <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
        <p>mctimmykings@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
