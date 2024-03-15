import React from 'react'
import classes from './styles/Header.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={classes.error}>
      <h1>Error 404,Page Not Found</h1>
      <p>Please return to home <button><Link to="/">here</Link></button></p>
    </div>
  )
}
