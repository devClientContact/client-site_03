import React from 'react'
import styles from '../../styles/Home.module.scss'
import { products } from "../../assets/ProductList"
import Product from '../Product'

const ItemGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {products.map((product: any) => {
        return(
        <>
          <Product key={product.id} product={product}/>
        </>
        )
      })}
    </div>
  )
}

export default ItemGrid
