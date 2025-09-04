import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import kscCover from "./images/kscCover_2.png";
import courseFlow from "./images/course_flow.png";
import sjm from "./images/sjm_ecommerce.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Course Flow",
      description:
        "A comprehensive platform for managing and tracking online courses.",
      image: courseFlow,
      projectLink: null,
      githubLink: "https://github.com/pawidachum/Course-Flow",
    },
    {
      id: 2,
      name: "Khumchaosua",
      description:
        "A marketing and e-commerce website for a local business, built with modern web technologies.",
      image: kscCover,
      projectLink: "https://khumchaosua.com/",
      githubLink: null,
    },
    {
      id: 3,
      name: "SJM E-commerce",
      description:
        "A full-featured e-commerce application with a clean, responsive design and secure payment system.",
      image: sjm,
      projectLink: null,
      githubLink: null,
    },
  ];

  return (
    <section className={styles.portfolio_section} id="portfolio">
      <div className={styles.container}>
        <h2 className={styles.section_title}>My Work</h2>
        <div className={styles.project_grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project_card}>
              <Tilt
                className={styles.tilt_card}
                scale={1.05}
                transitionSpeed={2500}
                tiltReverse={true}
              >
                <div className={styles.image_container}>
                  <img src={project.image} alt={project.name} />
                </div>
              </Tilt>
              <div className={styles.card_content}>
                <h3 className={styles.project_name}>{project.name}</h3>
                <p className={styles.project_description}>
                  {project.description}
                </p>
                <div className={styles.links}>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.project_link}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.github_link}
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
