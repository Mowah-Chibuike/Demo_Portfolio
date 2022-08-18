import React from "react";
import classes from "./Services.module.css";
import ServicesList from "./ServicesList/ServicesList";

const Services = () => {
  return (
    <section className={classes.skills}>
      <h2 className={classes.title}>My Services</h2>
      <p className={classes.summary}>The world class services I offer</p>
      <ServicesList />
    </section>
  );
};

export default Services;
