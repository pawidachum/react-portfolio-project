import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.greeting}>Hello, I'm</p>
            <h1 className={styles.name}>Pawida Chumpurat</h1>
            <h2 className={styles.jobTitle}>
              <span className={styles.jobPrefix}>I'm a</span>
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  1500,
                  "Web Developer",
                  1500,
                  "Full-stack Developer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className={styles.bio}>
              I am a full-stack developer with a background in microbiology,
              bringing a unique blend of analytical skills and technical
              expertise to software development. After spending as a laboratory
              technician, I made the exciting decision to transition into the
              tech world. My curiosity for programming grew, leading me to
              complete various bootcamps, including a full-time Software
              Developer Bootcamp at TechUp, where I gained hands-on experience
              with modern technologies. <br /> Through my recent roles, I have
              sharpened my skills in front-end and back-end development, with a
              focus on using technologies like Next.js, TypeScript, Node.js, and
              Firebase. I also implemented innovative features such as AI-driven
              content generation and system roles for classroom management, all
              while collaborating within Scrum teams to deliver high-quality web
              applications. <br /> With a solid foundation in both science and
              programming, I am always eager to learn and tackle new challenges
              in software development.
            </p>
            <ul className={styles.social_links}>
              <li>
                <a href="https://github.com/pawidachum" aria-label="GitHub profile">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/" aria-label="LinkedIn profile">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto:your.email@example.com" aria-label="Email me">
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
          <Tilt tiltReverse={true} className={styles.tiltWrapper}>
            <div className={styles.hero_image}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
