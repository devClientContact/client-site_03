import React from 'react'
import styles from '../../styles/Home.module.scss'

const ItemGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}></div>
      <div className={styles.gridItem}></div>
      <div className={styles.gridItem}></div>
    </div>
  )
}

export default ItemGrid
