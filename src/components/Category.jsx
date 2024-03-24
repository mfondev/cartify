import React, { useContext, useEffect } from 'react'
import { categoryContext } from './categoryContext'
import classes from './styles/Category.module.css'
import { Link } from 'react-router-dom'
import { MagnifyingGlass, UserCircle, Bag, Lock } from 'phosphor-react'
import { ProductContext } from './product-context'
import Nav from './Nav'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Category() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { category, categoryClicked } = useContext(categoryContext)
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
      {/* <nav className={classes.nav}>
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
          <div className={classes.cart}>
            <Bag size={20} />
            <p>Cart({addedItems.length})</p>
          </div>
          <div className={classes.login}>
            <UserCircle size={20} />
            <p>Login</p>
          </div>
        </div>
      </nav> */}
      <Nav />
      <div className={classes.categoryTitle}>
        <h1>{categoryClicked} Collections</h1>
      </div>
      <div className={classes.categories}>
        {category
          ? category.map((category) => (
              <div key={category.id} className={classes.items}>
                <img src={category.image} alt='' className={classes.image} />
                <div className={classes.desc}>
                  <div>
                    <h1 className={classes.title}>{category.title}</h1>
                    <p className={classes.price}>${category.price}</p>
                  </div>
                  {/* <Lock className={classes.lock} /> */}
                </div>
              </div>
            ))
          : 'Loading...'}
      </div>
    </>
  )
}
