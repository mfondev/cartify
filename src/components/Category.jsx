import React, { useContext, useEffect } from 'react'
import { categoryContext } from '../context/categoryContext'
import classes from '../styles/Category.module.css'
import { Link } from 'react-router-dom'
import { MagnifyingGlass, UserCircle, Bag, Lock } from 'phosphor-react'
import { ProductContext } from '../context/product-context'
import Nav from './Nav'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Category() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { category, categoryClicked } = useContext(categoryContext)

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
      
      <Nav />
      <div className={classes.categoryTitle}>
        <h1>{categoryClicked} Collections</h1>
      </div>
      <div className={classes.categories}>
        {category
          ? category.map((category) => (
              <Link
                key={category.id}
                className={classes.items}
                to={`/${category.id}`}
              >
                <img src={category.image} alt='' className={classes.image} />
                <div className={classes.desc}>
                  <div>
                    <h1 className={classes.title}>{category.title}</h1>
                    <p className={classes.price}>${category.price}</p>
                  </div>
                </div>
              </Link>
            ))
          : 'Loading...'}
      </div>
    </>
  )
}
