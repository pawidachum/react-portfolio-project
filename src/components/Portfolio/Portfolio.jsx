import React from "react";
import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";
import kscCover from "./images/kscCover_2.png";
import courseFlow from "./images/courseFlow_3.png";
import calculator from "./images/calculator.png";
import realtimeChat from "./images/realtimeChat.png";

function Portfolio() {
  return (
    <div className={styles.port_con} id="portfolio">
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src={courseFlow} alt="Course Flow web" />
          </Tilt>
          <p>Course Flow</p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src={kscCover} alt="Khumchaosua web" />
          </Tilt>
          <p>Khumchaosua </p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src={calculator} alt="Calculator application" />
          </Tilt>
          <p>Calculator</p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
            src={realtimeChat}
              alt="Real time chat application"
            />
          </Tilt>
          <p>Real time chat</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
