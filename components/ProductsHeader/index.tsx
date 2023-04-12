import React from 'react'
import styles from '../../styles/Home.module.scss'

const ProductsHeader = () => {
  return (
    <div className={styles.productsHeaderContainer}>
      <p className={styles.headerText}>Julie W / </p>
      <p className={styles.headerTextBold}>Products</p>
    </div>
  )
}

export default ProductsHeader
