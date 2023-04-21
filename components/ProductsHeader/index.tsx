import React from 'react'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

const ProductsHeader = () => {
  return (
    <div className={styles.productsHeaderContainer}>
      <Link href='/'>
        <p className={styles.headerText}>Julie W /</p>
      </Link>
      <p className={styles.headerTextBold}>Products</p>
    </div>
  )
}

export default ProductsHeader
