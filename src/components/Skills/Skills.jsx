import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaGitAlt, FaNode, FaAngular } from 'react-icons/fa6'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

function Skills() {
  return (
    <div className={styles.skills_con} id="skills">
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li><FaSquareJs/></li>
            <li><SiTypescript/></li>
            <li><FaReact/></li>
            <li><FaAngular/></li>
            <li><SiNextdotjs/></li>
            <li><FaGitAlt/></li>
            <li><FaNode/></li>
        </ul>
    </div>
  )
}

export default Skills