import React, { useEffect, useState } from 'react'
import homeImage from '/images/ski.jpg'
import user from '/images/user.svg'
import classes from './styles/Header.module.css'
import {
  ShoppingCart,
  MagnifyingGlass,
  MapPin,
  List,
  UserCircle,
  Bag,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import Products from './Product'
import { useContext } from 'react'
import { ProductContext } from './product-context'
import Categories from './Categories'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Header() {
  const { addedItems } = useContext(ProductContext)

  return (
    <>
      <div className={classes.top}>
        <p>
          New Season Coming! Discount 10% for all products! Check out now{' '}
          <span className={classes.time}>
            {hour}:{String(minute).padStart(2, '0')}
          </span>
        </p>
      </div>
      <nav className={classes.mobileNav}>
        <div className={classes.mobileLogo}>
          <List size={24} weight='bold' />
          <Link to='/' className={classes.Link}>
            <h1>Cartify</h1>
          </Link>
          <ul className={classes.userInfo}>
            <div className={classes.search}>
              <MagnifyingGlass className={classes.searchIcon} />
              <input
                type='text'
                className={classes.input}
                placeholder='search'
              />
            </div>
            <Link to='/cart' className={classes.Link}>
              <ShoppingCart className={classes.icons} />
              <p>{addedItems.length}</p>
            </Link>
          </ul>
        </div>
      </nav>
      <div className={classes.homeArea}>
        <img src={homeImage} alt='' className={classes.homeImage} />
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
              <input
                type='text'
                className={classes.input}
                placeholder='search'
              />
            </div>
            {/* <Link to='/cart' className={classes.Link}>
              <ShoppingCart className={classes.icons} />
              <p>{addedItems.length}</p>
            </Link> */}
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
        <div className={classes.cartify}>
          <h1>Cartify Project</h1>
          <p>
            Discover endless possibilities with Cartify! Explore our curated
            collections spanning fashion, electronics, and more for all your
            shopping needs.
          </p>
          <p className={classes.shopNowBttn}>Shop Now</p>
        </div>
      </div>

      <Products />
      <Categories />
    </>
  )
}
