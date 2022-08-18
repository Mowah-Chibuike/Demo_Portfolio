import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Guage.module.css";

const Guage = ({ text, percentage, icon }) => {
  return (
    <div className={classes.guage}>
      <div className={classes.icon_container}>
        <FontAwesomeIcon className={classes.icon} icon={icon} />
      </div>
      <div className={classes.guage_container}>
        <h5>{text}</h5>
        <div className={classes.main_guage}>
          <span
            style={{
              width: `${percentage}%`,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Guage;
