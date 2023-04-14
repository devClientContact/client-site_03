import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>Julie W</p>
        <p className={styles.titleText}>Shop</p>
      </div>
      <div className={styles.navbarContainer}>
        <div className={styles.navItem}>
          <Link href='/products'>
            <p className={styles.navText}>Products</p>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href='/about'>
            <p className={styles.navText}>About</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
