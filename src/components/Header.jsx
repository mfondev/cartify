import React, { useEffect, useState } from 'react'
import homeImage from '/images/cartHome-image.jpg'
import user from '/images/user.svg'
import classes from './styles/Header.module.css'
import { ShoppingCart, MagnifyingGlass, MapPin,List } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Products from './Product'
import { useContext } from 'react'
import { ProductContext } from './product-context'

let hour = new Date().getHours()
let minute = new Date().getMinutes()

export default function Header() {
  const { addedItems } = useContext(ProductContext)

  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            )
            const data = await response.json()
            setCountry(data.countryName)
            setState(data.principalSubdivision)
          } catch (error) {
            setError('Failed to fetch location data')
          }
        },
        (error) => {
          setError(error.message)
        }
      )
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }, [])

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
      {/* <div className={classes['nav-img']}> */}
      <nav className={classes.nav}>
        <Link to='/' className={classes.Link}>
          <h1>Cartify</h1>
        </Link>
        <div className={classes.location}>
          <MapPin size={16} weight='thin' />
          <p>
            {state}, {country}
          </p>
        </div>
        <div className={classes.search}>
          <MagnifyingGlass className={classes.searchIcon} />
          <input type='text' className={classes.input} placeholder='search' />
        </div>
        <ul className={classes.userInfo}>
          <Link to='/cart' className={classes.Link}>
            <ShoppingCart className={classes.icons} />
            <p>{addedItems.length}</p>
          </Link>
          <img src={user} alt='' className={classes.user} />
        </ul>
      </nav>
      <nav className={classes.mobileNav}>
        <div className={classes.mobileLogo}>
          <List size={24} weight='bold' />
          <Link to='/' className={classes.Link}>
            <h1>Cartify</h1>
          </Link>
          <ul className={classes.userInfo}>
            <Link to='/cart' className={classes.Link}>
              <ShoppingCart className={classes.icons} />
              <p>{addedItems.length}</p>
            </Link>
          
          </ul>
        </div>
        <div className={classes.mobileSearch}>
          <div className={classes.search}>
            <MagnifyingGlass className={classes.searchIcon} />
            <input type='text' className={classes.input} placeholder='search' />
          </div>
          <img src={user} alt='' className={classes.user} />
        </div>
      </nav>
      {/* </div> */}
      <div className={classes.homeInfo}>
        <h1>
          Grab up to 20% off on Selected Categories
          <span className={classes.buyNow}> Buy Now</span>
        </h1>
        <img src={homeImage} alt='homeImage' className={classes.homeImage} />
      </div>
      <Products />
    </>
  )
}
