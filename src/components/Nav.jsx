import React from 'react'
import homeImage from '/images/man.jpg'
import classes from './Nav.module.css'
import { ShoppingCart, User } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from './product-context'

let hour = new Date().getHours()
let minute = new Date().getMinutes()
export default function Nav() {
  const {addedItems} = useContext(ProductContext)
  return (
    <>
      <div className={classes['nav-img']}>
        <nav className={classes.nav}>
          <ul className={classes['nav-links']}>
            <Link to='/' className={classes.Link}>
              <h1>CARTIFY</h1>
            </Link>
            <li>Categories</li>
              <li>Products</li>
            <li>Store</li>
            <li>Blog</li>
            <li>Find Store</li>
          </ul>
          <ul className={classes['nav-links']}>
            <li>Search</li>
            <Link to='/cart' className={classes.Links}>
              <li>
                <ShoppingCart size={14} /> Cart({addedItems.length})
              </li>
            </Link>
            <li>
              <User size={14} /> Login
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
