import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it’s me</p>
            <h3 className={styles.text_2}>Pawida Chumpurat</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}> I’m a</span>
              <TypeAnimation
                sequence={["Front-end Developer", 1000, "Web Developer", 1000, "Full-stack Developer", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              I am a full-stack developer with a background in microbiology,
              bringing a unique blend of analytical skills and technical
              expertise to software development. After spending as a laboratory
              technician, I made the exciting decision to transition into the
              tech world. My curiosity for programming grew, leading me to
              complete various bootcamps, including a full-time Software
              Developer Bootcamp at TechUp, where I gained hands-on experience
              with modern technologies. <br/> Through my recent roles, I have
              sharpened my skills in front-end and back-end development, with a
              focus on using technologies like Next.js, TypeScript, Node.js, and
              Firebase. I also implemented innovative features such as AI-driven
              content generation and system roles for classroom management, all
              while collaborating within Scrum teams to deliver high-quality web
              applications. <br/> With a solid foundation in both science and
              programming, I am always eager to learn and tackle new challenges
              in software development.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/pawidachum">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tillReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
