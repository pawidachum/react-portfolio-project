import styles from "./Skills.module.css";
import {
  FaSquareJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiFlutter } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaSquareJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiFlutter />, name: "Flutter" },

  ];

  return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.container}>
        <h2 className={styles.skills_title}>My Skill Set</h2>
        <ul className={styles.skills_grid}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill_item}>
              <div className={styles.icon_wrapper}>{skill.icon}</div>
              <p className={styles.skill_name}>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
