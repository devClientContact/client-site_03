import React from 'react'
import { AboutText } from '../../assets/AboutText'
import styles from '../../styles/Home.module.scss'

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.aboutText}>{AboutText}</p>
    </div>
  )
}

export default About
