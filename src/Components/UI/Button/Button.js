import React from "react";
import classes from "./Button.module.css";

const HollowButton = ({ children, className, onClick, type, form }) => {
  return (
    <button
      className={className ? className : classes.button}
      onClick={onClick ? onClick : undefined}
      type={type ? type : "button"}
      form={form ? form : undefined}
    >
      {children}
    </button>
  );
};

export default HollowButton;
