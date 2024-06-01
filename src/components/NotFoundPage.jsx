import React from 'react'
import classes from '../styles/Header.module.css'
import { Link, useRouteError } from 'react-router-dom'

export default function NotFoundPage() {
  const error = useRouteError()
  let message = 'Something went wrong'
  if (error.status === 500) {
    message = error.data.message
  }

  if (error.status === 404) {
    message = 'failed to find resource page'
  }
  return (
    <div className={classes.error}>
      <h1>{message}</h1>
      <p>
        Please return to home{' '}
        <button>
          <Link to='/'>here</Link>
        </button>
      </p>
    </div>
  )
}
