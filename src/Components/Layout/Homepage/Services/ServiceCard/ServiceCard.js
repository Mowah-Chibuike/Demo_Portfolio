import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ServiceCard.module.css";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className={classes.service_card}>
      <FontAwesomeIcon className={classes.icon} icon={icon} />
      <p className={classes.title}>{title}</p>
    </div>
  );
};

export default ServiceCard;
