import React from "react";
import classes from "./Contact.module.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default Contact;
