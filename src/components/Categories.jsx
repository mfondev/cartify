import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import classes from '../styles/Categories.module.css'
import jewelry from '/images/jewelry.jpg'
import electronics from '/images/electronics.jpg'
import menClothing from '/images/men.jpg'
import womenClothing from '/images/women.jpg'
import { Link } from 'react-router-dom'
import { categoryContext } from '../context/categoryContext'


export default function Categories() {

  const { handleClick } = useContext(categoryContext)

  return (
    <>
      <div className={classes.header}>
        <h1>Featured Collection</h1>
        <p>Dare to mix and match! Check our collection to level up</p>
      </div>
      <div className={classes.imageCollection}>
        <div className={classes.category}>
          <img src={menClothing} alt='' className={classes.categoryImage} />
          <div className={classes.desc}>
            <h1>MEN'S CLOTHING</h1>
            <p>
              Check our cool collection for Men's clothing Get Disc 10% on New
              Season
            </p>
            <p>
              <Link to={`/category`}>
                <button
                  onClick={() => {
                    handleClick(`men's clothing`)
                  }}
                  className={classes.discover}
                >
                  Discover
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.category}>
          <img src={jewelry} alt='' className={classes.categoryImage} />
          <div className={classes.desc}>
            <h1>JEWELERY</h1>
            <p>
              Check our collection for cool Jewelries. Get Disc 10% on New
              Season
            </p>
            <p>
              <Link to={`/category`}>
                <button
                  onClick={() => {
                    handleClick(`jewelery`)
                  }}
                  className={classes.discover}
                >
                  Discover
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.category}>
          <img src={electronics} alt='' className={classes.categoryImage} />
          <div className={classes.desc}>
            <h1>ELECTRONICS</h1>
            <p>Check our electronics collection, Get Disc 10% on New Season.</p>
            <p>
              <Link to={`/category`}>
                <button
                  onClick={() => {
                    handleClick(`electronics`)
                  }}
                  className={classes.discover}
                >
                  Discover
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.category}>
          <img src={womenClothing} alt='' className={classes.categoryImage} />
          <div className={classes.desc}>
            <h1>WOMEN</h1>
            <p>
              Check our cool collection for Women's clothing Get Disc 10% on New
              Season
            </p>
            <p>
              <Link to={`/category`}>
                <button
                  onClick={() => {
                    handleClick(`women's clothing`)
                  }}
                  className={classes.discover}
                >
                  Discover
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
