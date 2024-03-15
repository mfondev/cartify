import React from 'react'
import user from '/images/user.svg'
import { ShoppingCart,MagnifyingGlass } from 'phosphor-react'
import classes from './styles/Nav.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from './product-context'

let hour = new Date().getHours()
let minute = new Date().getMinutes()
export default function Nav() {
  const {addedItems} = useContext(ProductContext)
  return (
    <>
      <nav className={classes.nav}>
        <Link to='/' className={classes.Link}>
          <h1>Cartify</h1>
        </Link>
        <ul className={classes['nav-links']}>
          <li>Products</li>
          <li>Store</li>
          <li>Categories</li>
          <li>Our Story</li>
        </ul>
        <ul className={classes.userInfo}>
          <MagnifyingGlass className={classes.icons} />
          <Link to='/cart' className={classes.Link}>
            <ShoppingCart className={classes.icons} />
            <p>{addedItems.length}</p>
          </Link>
          <img src={user} alt='' className={classes.user} />
        </ul>
      </nav>
    </>
  )
}
