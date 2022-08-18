import React from "react";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import classes from "./Skills.module.css";
import SkillsList from "./SkillsList/SkillsList";

const Skills = () => {
  return (
    <section className={classes.skills}>
      <h2 className={classes.title}>My Skills</h2>
      <p className={classes.summary}>Technologies I have adopted</p>
      <SkillsList />
    </section>
  );
};

export default Skills;
