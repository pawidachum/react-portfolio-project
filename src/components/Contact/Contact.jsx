import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className={styles.contact_wrapper} id="contact">
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3>Get in touch</h3>
          <p className={styles.contact_desc}>
          Let's work together! Whether you have a project in mind or just want to chat about opportunities, I'm always excited to connect with fellow developers and potential collaborators.
          </p>
          <p className={styles.contact_address}>
            112/283 Passorn Pride <br />
            Bang Kaew, Bang Phli <br />
            Samutprakan, Thailand
          </p>
          <p style={{ display: "flex", gap: "1rem" }}>
            <FaPhone />
            (+66) 63 545 5516
          </p>
          <p style={{ display: "flex", gap: "1rem" }}>
            <FaEnvelope />
            pawida.may@gmail.com
          </p>
        </div>
        <div className={styles.contact_form}>
          <form action="">
            <div className={styles.contact_inputgroup}>
              <div>
                <label htmlFor="first name">First Name</label>
                <input type="text" id="first name" placeholder="eg. John" />
              </div>
              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" id="first name" placeholder="eg. Doe" />
              </div>
            </div>
            <label htmlFor="email address">Email address</label>
            <input type="email" id="email address" placeholder="eg. johndoe@gmail.com" />
            <label htmlFor="message">Your message</label>
            <textarea name="text area" id="" cols="30" rows="10" placeholder="Type here"></textarea>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
