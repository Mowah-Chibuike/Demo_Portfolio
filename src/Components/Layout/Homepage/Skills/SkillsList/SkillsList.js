import React from "react";
import classes from "./SkillsList.module.css";
import skillsArray from "./skills-array";
import Guage from "../Guage/Guage";

const SkillsList = () => {
  return (
    <div className={classes.skills_list}>
      {skillsArray.map((skill, i) => {
        const { Text, icon, percentage } = skill;
        return (
          <Guage key={i} text={Text} icon={icon} percentage={percentage} />
        );
      })}
    </div>
  );
};

export default SkillsList;
