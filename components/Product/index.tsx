import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

const Product = ({ product }: any) => {
  const ROUTE_POST_ID = 'products/[productName]'
  return (
    <>
      <div className={styles.gridItem}>
        {product.description}
      </div>
    </>
  )
}

export default Product
