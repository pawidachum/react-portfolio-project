import React from 'react'
import styles from './JobExperience.module.css'
import { FaCode } from 'react-icons/fa6'

function JobExperience() {
  return (
    <div className={styles.services_con}>
        <h3 className={styles.services_title}>My Job Experience</h3>
        <div className={styles.services_list}>
        <div className={styles.services_item}>
            <FaCode />
            <h4>Web Frontend Developer</h4>
            <h3>Neo Link</h3>  
            <p>Translated Figma designs into responsive web applications and built feature by using Angular</p> 
        </div>
        <div className={styles.services_item}>
            <FaCode/>
            <h4>Web Full-stack Developer</h4>
            <h3>Reading Advantage</h3>
            <p>Built English learning platform with Next.js and TypeScript</p>
        </div>
        <div className={styles.services_item}>
            <FaCode />
            <h4>Web Full-stack Developer</h4>
            <h3>Nano Vip Car</h3>
            <p>Designed complete UI/UX system using Figma and built web application by using Nextjs</p>
        </div>

        </div>
      
    </div>
  )
}

export default JobExperience