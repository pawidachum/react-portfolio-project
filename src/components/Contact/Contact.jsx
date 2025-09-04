import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.contact_container}>
        <div className={styles.contact_info}>
          <h3 className={styles.info_heading}>Get in touch</h3>
          <p className={styles.contact_desc}>
            Let's work together! Whether you have a project in mind or just want
            to chat about opportunities, I'm always excited to connect with
            fellow developers and potential collaborators.
          </p>
          <div className={styles.contact_details}>
            <p className={styles.contact_item}>
              <FaPhone className={styles.contact_icon} />
              <span>(+66) 63 545 5516</span>
            </p>
            <p className={styles.contact_item}>
              <FaEnvelope className={styles.contact_icon} />
              <span>pawida.may@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
