import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h4>Hello</h4>
      <h3>I'm Chibuike</h3>
      <p>A Creative Front-end Developer</p>
      <Button>Hire Me</Button>
    </section>
  );
};

export default Hero;
