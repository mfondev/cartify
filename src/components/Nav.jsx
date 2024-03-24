import React from 'react'
import user from '/images/user.svg'
import {
  MagnifyingGlass,
  UserCircle,
  Bag,
  List,
  ShoppingCart,
} from 'phosphor-react'
import classes from './styles/Nav.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from './product-context'

let hour = new Date().getHours()
let minute = new Date().getMinutes()
export default function Nav() {
  const { addedItems } = useContext(ProductContext)
  return (
    <>
      {/* <nav className={classes.nav}>
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
      </nav> */}
      <nav className={classes.nav}>
        <div className={classes.orgInfo}>
          <Link to='/' className={classes.Link}>
            <h1>cartify</h1>
          </Link>
          <ul className={classes['nav-links']}>
            <li>Categories</li>
            <li>Collections</li>
            <li>Store</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={classes.userInfo}>
          <div className={classes.search}>
            <MagnifyingGlass className={classes.searchIcon} />
            <input type='text' className={classes.input} placeholder='search' />
          </div>
          <Link to='/cart' className={classes.cart}>
            <Bag size={20} />
            <p>Cart({addedItems.length})</p>
          </Link>
          <div className={classes.login}>
            <UserCircle size={20} />
            <p>Login</p>
          </div>
        </div>
      </nav>

      <nav className={classes.mobileNav}>
        <div className={classes.navv}>
          <Link to='/' className={classes.Link}>
            <h1>Cartify</h1>
          </Link>
          <div className={classes.mobileSearch}>
            <div className={classes.search}>
              <MagnifyingGlass className={classes.searchIcon} />
              <input type='text' className={classes.input} placeholder='search' />
            </div>
            <ul className={classes.userInfo}>
              <Link to='/cart' className={classes.Link}>
                <ShoppingCart className={classes.icons} />
                <p>{addedItems.length}</p>
              </Link>
            </ul>
            <List size={24} weight='bold' />
            {/* <img src={user} alt='' className={classes.user} /> */}
          </div>
        </div>
      </nav>
    </>
  )
}
