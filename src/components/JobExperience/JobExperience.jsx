import styles from './JobExperience.module.css';
import { FaCode, FaLaptopCode, FaDesktop } from 'react-icons/fa6';

function JobExperience() {
  const experiences = [
    {
      title: "Web Frontend Developer",
      company: "Neo Link",
      description: "Translated Figma designs into responsive web applications and built features using Angular.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Web Full-stack Developer",
      company: "Reading Advantage",
      description: "Built an English learning platform with Next.js and TypeScript, handling both front-end and back-end logic.",
      icon: <FaCode />,
    },
    {
      title: "Web Full-stack Developer",
      company: "Nano Vip Car",
      description: "Designed a complete UI/UX system using Figma and developed a robust web application using Next.js.",
      icon: <FaDesktop />,
    },
  ];

  return (
    <section className={styles.job_experience_section} id="experience">
      <div className={styles.container}>
        <h2 className={styles.section_title}>My Job Experience</h2>
        <div className={styles.experience_grid}>
          {experiences.map((item, index) => (
            <div key={index} className={styles.experience_card}>
              <div className={styles.icon_wrapper}>
                {item.icon}
              </div>
              <h4 className={styles.job_title}>{item.title}</h4>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobExperience;