import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

const Product = ({ product }: any) => {
  const ROUTE_POST_ID = 'products/[productName]'
  return (
    <>
      <div className={styles.gridItemContainer}>
        <div className={styles.productImageContainer}></div>
        <div className={styles.productTextContainer}>
          <div className={styles.productName}>
           {product.name}
          </div>
          <div className={styles.productPrice}>
           {product.price}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
