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
      <div className={classes['nav-img']}>
        {/* <nav className={classes.nav}>
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
        </nav> */}
        {/* <nav className={classes.nav}>
          <ul className={classes['nav-links']}>
            <Link to='/' className={classes.Link}>
              <h1>Cartify</h1>
            </Link>
          </ul>
          <ul className={classes['nav-links']}>
            <li>Products</li>
            <li>Store</li>
            <li>Categories</li>
            <li>Our Story</li>
          </ul>
          <ul className={classes['nav-links']}>
            <MagnifyingGlass size={26} color='#000' />
            <Link to='/cart' className={classes.Link}>
              <ShoppingCart size={26}  color='#000'/>
              <p>{addedItems.length}</p>
            </Link>

            <img src={user} alt='' className={classes.user} />
          </ul>
        </nav> */}
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
            <MagnifyingGlass size={26} color='#000' />
            <Link to='/cart' className={classes.Link}>
              <ShoppingCart size={26} />
              <p>{addedItems.length}</p>
            </Link>
            <img src={user} alt='' className={classes.user} />
          </ul>
        </nav>
      </div>
    </>
  )
}
