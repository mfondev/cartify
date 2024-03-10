import React from 'react'
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div></div>
      <div className={classes.footerContainer}>
        <div className={classes.footer}>
          <div className={classes.footerOrgInfo}>
            <h1>Cartify</h1>
            <p>
              Experience the Great Outdoors in Style with Cartify's.Shop now and
              gear up for adventure in Cartify!
            </p>
          </div>
          <div className={classes.Links}>
            <ul className={classes.footerLinks}>
              <h2>Categories</h2>
              <li>Jakets</li>
              <li>Shirts</li>
              <li>Knit</li>
              <li>T-shirts</li>
              <li>Bottoms</li>
              <li>Accessories</li>
            </ul>
            <ul className={classes.footerLinks}>
              <h2>Customer Care</h2>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Order Status</li>
              <li>Return & Exchange</li>
            </ul>
            <ul className={classes.footerLinks}>
              <h2>Company</h2>
              <li>Privacy</li>
              <li>Guides</li>
              <li>Term of Conditions</li>
            </ul>
          </div>
          <div className={classes.footerLogos}>
            <InstagramLogo size={32} color='#fff' />
            <FacebookLogo size={32} color='#fff' />
            <TwitterLogo size={32} color='#fff' />
            <YoutubeLogo size={32} color='#fff' />
          </div>
        </div>
        <div className={classes.rights}>
          <div className={classes.footerCopyRights}>
            <p>Call Us On +12 332476</p>
            <p>Send Email</p>
            <p>USD $ | English</p>
          </div>
        </div>
        <p className={classes.copyRights}>&copy; 2024 Cartify's Studio,Inc - All Rights Reserved</p>
      </div>
    </>
  )
}
