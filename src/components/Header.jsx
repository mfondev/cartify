import React, { useState } from 'react'
import homeImage from '/images/home-img.jpg'
import user from '/images/user.svg'
import classes from './styles/Header.module.css'
import { ShoppingCart, MagnifyingGlass } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Products from './Product'
import { useContext } from 'react'
import { ProductContext } from './product-context'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Header() {
  const { addedItems } = useContext(ProductContext)
  
  return (
    <>
      <p className={classes.top}>
        New Season Coming! Discount 10% for all products! Check out now{' '}
        <span className={classes.time}>
          {hour}:{String(minute).padStart(2, '0')}
        </span>
      </p>
      <div className={classes['nav-img']}>
        <img src={homeImage} alt='homeImage' className={classes.homeImage} />
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
            <img src={user} alt="" className={classes.user}/>
          </ul>
        </nav>
        <div className={classes['jolt-info']}>
          <h1>CARTIFY'S HEADLINE PROJECT</h1>
          <p>
            Introducing our latest collection, designed specifically for outdoor
            enthusiasts. Feature a range of performance outwear with a range of
            bold and vibrant colors and patterns to choose from.
          </p>
          <button className={classes.shopNowBttn}>Shop Now</button>
        </div>
      </div>
      <Products />
    </>
  )
}
