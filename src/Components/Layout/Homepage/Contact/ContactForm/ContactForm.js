import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import Button from "../../../../UI/Button/Button";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const handleCancelClick = () => {
    setShowForm(false);
  };
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("success");
  };

  return (
    <div className={`${classes.contact_form} ${showForm && classes.active}`}>
      <p className={classes.title}>Need a Service?</p>
      <h2>Send A Message</h2>
      {showForm && (
        <form id="message" onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Enter Fullname" />
          <input type="text" placeholder="Enter Email Address" />
          <textarea placeholder="Enter Message"></textarea>
        </form>
      )}
      {showForm && (
        <Button className={classes.cancel} onClick={handleCancelClick}>
          Cancel
        </Button>
      )}
      <Button
        type={showForm && "submit"}
        form={showForm && "message"}
        onClick={!showForm && handleButtonClick}
      >
        Send Message
      </Button>
    </div>
  );
};

export default ContactForm;
