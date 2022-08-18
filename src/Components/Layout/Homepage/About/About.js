import React from "react";
import classes from "./About.module.css";
import Button from "../../../UI/Button/Button";
import profilePic from "../../../../Assets/IMG-20220404-WA0030~2.jpg";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.img}>
        <img src={profilePic} alt="" />
      </div>

      <div className={classes.container}>
        <h2 className={classes.title}>About Me</h2>
        <p className={classes.content}>
          Mowah Chibuike is a very diligent and passionate and focused
          programmer who loves challenges and build solutions to any form of
          problems using famous technologies from all around the world!
        </p>
        <div className={classes.actions}>
          <Button className={classes.button}>Download CV</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
